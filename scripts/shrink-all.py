from PIL import Image
import os, glob

A = r"F:\arunn\client-1\src\assets"
for src in glob.glob(os.path.join(A, "p*")):
    if not os.path.isfile(src) or os.path.getsize(src) < 200_000:
        continue
    im = Image.open(src).convert("RGB")
    if im.width > 1400:
        im = im.resize((1400, round(im.height * 1400 / im.width)), Image.LANCZOS)
    tmp = src + ".tmp"
    im.save(tmp, "JPEG", quality=82, optimize=True, progressive=True)
    before = os.path.getsize(src)
    os.replace(tmp, src)
    print(os.path.basename(src), before // 1024, "->", os.path.getsize(src) // 1024, "KB")
