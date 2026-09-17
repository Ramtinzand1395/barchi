from pathlib import Path

from PIL import Image, ImageDraw


SOURCE = Path(r"C:\Users\Ramtin\Downloads\file_000000004e3881f49767b62b55e7b3c3.png")
OUTPUT = Path(r"D:\دستیار\cafe-assistant\public\images\landing-extracted")
PREVIEW = OUTPUT / "_preview-contact-sheet.png"
GRID_PREVIEW = OUTPUT / "_debug-coordinate-grid.png"


def crop(image: Image.Image, name: str, box: tuple[int, int, int, int]) -> Path:
    result = image.crop(box)
    path = OUTPUT / name
    result.save(path, optimize=True)
    return path


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    image = Image.open(SOURCE).convert("RGBA")

    grid = image.convert("RGB")
    grid_draw = ImageDraw.Draw(grid)
    for x in range(0, grid.width, 50):
        grid_draw.line((x, 0, x, grid.height), fill=(255, 0, 0), width=1)
        grid_draw.text((x + 2, 2), str(x), fill=(255, 0, 0))
    for y in range(0, grid.height, 50):
        grid_draw.line((0, y, grid.width, y), fill=(255, 0, 0), width=1)
        grid_draw.text((2, y + 2), str(y), fill=(255, 0, 0))
    grid.save(GRID_PREVIEW, optimize=True)

    assets = [
        crop(image, "01-hero-phone-mockup.png", (286, 42, 690, 357)),
        crop(image, "02-cafe-owner-source.png", (20, 441, 355, 687)),
        crop(image, "03-barista-illustration.png", (538, 444, 687, 646)),
        crop(image, "04-coffee-bag.png", (35, 944, 126, 1084)),
        crop(image, "05-repeat-orders-phone.png", (247, 1118, 359, 1258)),
        crop(image, "06-wholesale-phone.png", (577, 1117, 687, 1258)),
        crop(image, "07-dashboard-mockup.png", (23, 1266, 395, 1472)),
        crop(image, "08-coffee-cup-beans.png", (23, 1615, 170, 1741)),
        crop(image, "09-download-phone-left.png", (23, 1749, 166, 1860)),
        crop(image, "10-download-phones-right.png", (520, 1749, 688, 1860)),
    ]

    thumbs: list[tuple[str, Image.Image]] = []
    for path in assets:
        thumb = Image.open(path).convert("RGB")
        thumb.thumbnail((280, 210))
        thumbs.append((path.name, thumb))

    cell_w, cell_h = 320, 250
    columns = 2
    rows = (len(thumbs) + columns - 1) // columns
    sheet = Image.new("RGB", (cell_w * columns, cell_h * rows), "white")
    draw = ImageDraw.Draw(sheet)
    for index, (name, thumb) in enumerate(thumbs):
        x = (index % columns) * cell_w
        y = (index // columns) * cell_h
        sheet.paste(thumb, (x + (cell_w - thumb.width) // 2, y + 24))
        draw.text((x + 10, y + 6), name, fill="black")
    sheet.save(PREVIEW, optimize=True)


if __name__ == "__main__":
    main()
