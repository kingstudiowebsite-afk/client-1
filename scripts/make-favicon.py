"""Build the KING STUDIO favicon set from the real gold wordmark artwork.

Renders the same circular crest as the header (gold rim, navy radial face,
user's src/assets/king-logo.png centred inside) at 1024px, then downsamples to
each icon size so every output is crisp.
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


def gold_ring(size):
    """Diagonal gold gradient disc, matching the header rim."""
    stops = [(0.0, (246, 226, 184)), (0.30, (201, 162, 74)), (0.54, (138, 101, 32)),
             (0.78, (237, 207, 143)), (1.0, (168, 130, 47))]
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    for y in range(size):
        for_x = y / (size - 1)
        # gradient along the diagonal; same feel as the CSS 150deg sweep
        for i in range(len(stops) - 1):
            t0, c0 = stops[i]
            t1, c1 = stops[i + 1]
            if t0 <= for_x <= t1:
                t = (for_x - t0) / (t1 - t0)
                c = lerp(c0, c1, t)
                d.line([(0, y), (size, y)], fill=c + (255,))
                break
    return img


def navy_face(size):
    """Radial navy face with an inset gold hairline."""
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    px = img.load()
    cx = cy = size / 2
    for y in range(size):
        for x in range(size):
            dx = (x - cx) / cx
            dy = (y - cy) / cy
            r = min(1.0, (dx * dx + dy * dy) ** 0.5)
            # radial-gradient(circle at 34% 26%, #1d2c4e, #121e3a, #0a1122, #050a14)
            stops = [(0.0, (29, 44, 78)), (0.38, (18, 30, 58)), (0.72, (10, 17, 34)), (1.0, (5, 10, 20))]
            c = stops[-1][1]
            for i in range(len(stops) - 1):
                t0, c0 = stops[i]
                t1, c1 = stops[i + 1]
                if t0 <= r <= t1:
                    t = (r - t0) / (t1 - t0)
                    c = lerp(c0, c1, t)
                    break
            px[x, y] = c + (255,)
    d = ImageDraw.Draw(img)
    d.ellipse([1, 1, size - 2, size - 2], outline=(201, 162, 74, 115), width=max(1, size // 220))
    return img


master = Image.new("RGBA", (S, S), (0, 0, 0, 0))
master.alpha_composite(gold_ring(S))

pad = round(S * 0.055)  # same 5.5% rim padding as Logo.tsx
inner = S - pad * 2
master.alpha_composite(navy_face(inner), (pad, pad))

# artwork at 84% of the inner face width, optically centred
target_w = round(inner * 0.84)
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
save("apple-touch-icon.png", 180)
save("favicon-32.png", 32)

ico = os.path.join(P, "favicon.ico")
master.resize((256, 256), Image.LANCZOS).save(
    ico, format="ICO", sizes=[(16, 16), (24, 24), (32, 32), (48, 48), (64, 64)]
)
print(f"favicon.ico: {os.path.getsize(ico) // 1024}KB")
