"""Build the KING STUDIO favicon set from the real gold wordmark artwork.

Renders the same circular crest as the header (gold rim, navy radial face,
user's src/assets/king-logo.png centred inside) at 1024px, then downsamples to
each icon size with LANCZOS so every output is crisp and the corners stay
transparent.
"""
from PIL import Image, ImageDraw
import os

A = r"F:\arunn\client-1\src\assets"
P = r"F:\arunn\client-1\public"
S = 1024  # supersampled master

logo = Image.open(os.path.join(A, "king-logo.png")).convert("RGBA")
bbox = logo.getbbox()
if bbox:
    logo = logo.crop(bbox)


def lerp(a, b, t):
    return tuple(round(a[i] + (b[i] - a[i]) * t) for i in range(3))


def gold_disc(size):
    """Gold-gradient disc, matching the header rim (CSS 150deg sweep)."""
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    stops = [(0.0, (248, 229, 188)), (0.26, (201, 162, 74)), (0.52, (150, 110, 36)),
             (0.76, (240, 212, 150)), (1.0, (173, 134, 49))]
    for y in range(size):
        for x in range(size):
            t = (x / (size - 1) * 0.45 + y / (size - 1) * 0.55)
            c = stops[-1][1]
            for i in range(len(stops) - 1):
                t0, c0 = stops[i]
                t1, c1 = stops[i + 1]
                if t0 <= t <= t1:
                    c = lerp(c0, c1, (t - t0) / (t1 - t0))
                    break
            img.putpixel((x, y), c + (255,))
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).ellipse([0, 0, size - 1, size - 1], fill=255)
    img.putalpha(mask)
    return img


def navy_face(size):
    """Radial navy face, brighter at the top-left like the header badge."""
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    px = img.load()
    cx, cy = size * 0.38, size * 0.30
    far = (size * 0.95)
    stops = [(0.0, (34, 53, 92)), (0.34, (22, 36, 70)), (0.66, (12, 21, 42)), (1.0, (6, 11, 22))]
    for y in range(size):
        for x in range(size):
            r = min(1.0, (((x - cx) ** 2 + (y - cy) ** 2) ** 0.5) / far)
            c = stops[-1][1]
            for i in range(len(stops) - 1):
                t0, c0 = stops[i]
                t1, c1 = stops[i + 1]
                if t0 <= r <= t1:
                    c = lerp(c0, c1, (r - t0) / (t1 - t0))
                    break
            px[x, y] = c + (255,)
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).ellipse([0, 0, size - 1, size - 1], fill=255)
    img.putalpha(mask)
    return img


master = Image.new("RGBA", (S, S), (0, 0, 0, 0))
master.alpha_composite(gold_disc(S))

pad = round(S * 0.062)  # gold rim thickness
inner = S - pad * 2
master.alpha_composite(navy_face(inner), (pad, pad))

# wordmark at 86% of the inner face width, optically centred
target_w = round(inner * 0.86)
target_h = round(logo.height * target_w / logo.width)
art = logo.resize((target_w, target_h), Image.LANCZOS)
master.alpha_composite(art, ((S - target_w) // 2, (S - target_h) // 2))

os.makedirs(P, exist_ok=True)


def save(name, size):
    im = master.resize((size, size), Image.LANCZOS)
    path = os.path.join(P, name)
    im.save(path, "PNG", optimize=True)
    print(f"{name}: {size}x{size} {os.path.getsize(path) // 1024}KB")


save("favicon-512.png", 512)
save("favicon-192.png", 192)
save("favicon-48.png", 48)
save("favicon-32.png", 32)

# ICO: Pillow builds every frame from this 512 master with LANCZOS
ico = os.path.join(P, "favicon.ico")
master.resize((512, 512), Image.LANCZOS).save(
    ico, format="ICO", sizes=[(16, 16), (24, 24), (32, 32), (48, 48), (64, 64)]
)
print(f"favicon.ico: {os.path.getsize(ico) // 1024}KB")

# iOS masks its own corners, so give it an opaque square navy tile
tile = Image.new("RGB", (S, S), (10, 17, 34))
crest = master.resize((round(S * 0.86), round(S * 0.86)), Image.LANCZOS)
tile.paste(crest, ((S - crest.width) // 2, (S - crest.height) // 2), crest)
tile.resize((180, 180), Image.LANCZOS).save(
    os.path.join(P, "apple-touch-icon.png"), "PNG", optimize=True
)
print(f"apple-touch-icon.png: 180x180 {os.path.getsize(os.path.join(P, 'apple-touch-icon.png')) // 1024}KB")
