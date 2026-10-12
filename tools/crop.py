"""Кадрирует портрет под карточку врача 560x616, сохраняя запас над головой."""
import sys, os
from PIL import Image
src, dst = sys.argv[1], sys.argv[2]
tw, th = 560, 616
im = Image.open(src).convert('RGB')
r = max(tw / im.width, th / im.height)
im = im.resize((round(im.width * r), round(im.height * r)), Image.LANCZOS)
left = (im.width - tw) // 2
top = 0                      # держимся верха: у сгенерированных портретов голова близко к краю
im = im.crop((left, top, left + tw, top + th))
im.save(dst, quality=86, method=6)
print(os.path.basename(dst), im.size, round(os.path.getsize(dst) / 1024), 'KB')
