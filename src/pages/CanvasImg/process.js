export function expandWithLimitation(context, limitation, maskImage, bookCoverImage) {
  const { x1, x2, y1, y2 } = limitation
  const w1 = maskImage.width
  const w2 = bookCoverImage.width
  const h1 = maskImage.height
  const h2 = bookCoverImage.height

  // top left
  context.drawImage(maskImage, 0, 0, x1, y1, 0, 0, x1, y1)
  // top right
  context.drawImage(maskImage, x2, 0, w1 - x2, y1, w2 - w1 + x2, 0, w1 - x2, y1)
  // bottom left
  context.drawImage(maskImage, 0, y2, x1, h1 - y2, 0, h2 - h1 + y2, x1, h1 - y2)
  // bottom right
  context.drawImage(maskImage, x2, y2, w1 - x2, h1 - y2, w2 - w1 + x2, h2 - h1 + y2, w1 - x2, h1 - y2)
  // top center
  context.drawImage(maskImage, x1, 0, x2 - x1, y1, x1, 0, w2 - w1 + x2 - x1, y1)
  // left center
  context.drawImage(maskImage, 0, y1, x1, y2 - y1, 0, y1, x1, h2 - h1 + y2 - y1)
  // right center
  context.drawImage(maskImage, x2, y1, w1 - x2, y2 - y1, w2 - w1 + x2, y1, w1 - x2, h2 - h1 + y2 - y1)
  // bottom center
  context.drawImage(maskImage, x1, y2, x2 - x1, h1 - y2, x1, h2 - h1 + y2, w2 - w1 + x2 - x1, h1 - y2)
  // center
  context.drawImage(maskImage, x1, y1, x2 - x1, y2 - y1, x1, y1, w2 - w1 + x2 - x1, h2 - h1 + y2 - y1)
}
