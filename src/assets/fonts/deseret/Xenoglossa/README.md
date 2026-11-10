# IDC Xenoglossa

MS-DOS box-drawing Deseret, built from the character patterns in [sigilante/idc-xenoglossa](https://github.com/sigilante/idc-xenoglossa). That project is a Python script, not a font file. These TrueType fonts trace those patterns so the transliterator can select them.

- `IDCXenoglossa.ttf` — five-row forms (`write.py` default)
- `IDCXenoglossaAlt.ttf` — three-row forms (`write.py 3`)

Small letters (U+10428–U+1044F) reuse the capital block form, which is what the script does when it uppercases its input. The script does not define capital Oi (U+10426) or Ew (U+10427); those two letters fall back to another Deseret font.

Copyright (c) 2025 Sigilante. MIT License.
