from PIL import Image
import os, glob, shutil

A = r"F:\arunn\client-1\src\assets"

def shrink(src, dst, max_w, q=82):
    im = Image.open(src)
    if im.mode in ("RGBA", "LA", "P"):
        im = im.convert("RGBA")
        bg = Image.new("RGB", im.size, (10, 17, 34))
        bg.paste(im, mask=im.split()[-1])
        im = bg
    else:
        im = im.convert("RGB")
    if im.width > max_w:
        h = round(im.height * max_w / im.width)
        im = im.resize((max_w, h), Image.LANCZOS)
    im.save(dst, "JPEG", quality=q, optimize=True, progressive=True)
    return im.size

# big photos -> max 1400 long edge
for name in ["p13.JPG", "p15.JPG", "p16.JPG", "p18.JPG", "p7.jpeg"]:
    src = os.path.join(A, name)
    if not os.path.exists(src):
        continue
    before = os.path.getsize(src)
    tmp = src + ".tmp"
    size = shrink(src, tmp, 1400)
    os.replace(tmp, src)
    print(f"{name}: {before//1024}KB -> {os.path.getsize(src)//1024}KB {size}")

# hero1.png -> hero1.jpg
src = os.path.join(A, "hero1.png")
if os.path.exists(src):
    before = os.path.getsize(src)
    size = shrink(src, os.path.join(A, "hero1.jpg"), 1400, 84)
    print(f"hero1.png -> hero1.jpg: {before//1024}KB -> {os.path.getsize(os.path.join(A,'hero1.jpg'))//1024}KB {size}")

# p10.PNG -> p10.jpg
src = os.path.join(A, "p10.PNG")
if os.path.exists(src):
    before = os.path.getsize(src)
    size = shrink(src, os.path.join(A, "p10.jpg"), 1400, 84)
    print(f"p10.PNG -> p10.jpg: {before//1024}KB -> {os.path.getsize(os.path.join(A,'p10.jpg'))//1024}KB {size}")

# hero / about full-bleed
for name, w in [("hero.jpg", 1920), ("about.jpg", 1600)]:
    src = os.path.join(A, name)
    before = os.path.getsize(src)
    tmp = src + ".tmp"
    size = shrink(src, tmp, w, 80)
    os.replace(tmp, src)
    print(f"{name}: {before//1024}KB -> {os.path.getsize(src)//1024}KB {size}")
