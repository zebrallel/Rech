import * as React from 'react'
import foreground from '../../assets/bbb.png'

export default class CanvasImg extends React.Component {
  onFileChange = event => {
    const selectedFile = event.target.files[0]
    const reader = new FileReader()

    reader.onload = eve => {
      const bookImg = new Image()
      const foregroundImg = new Image()

      Promise.all([this.loadImg(foregroundImg, foreground), this.loadImg(bookImg, eve.target.result)]).then(() => {
        const context = canvas.getContext('2d')

        context.drawImage(bookImg, 0, 0, bookImg.width, bookImg.height, 0, 0, bookImg.width, bookImg.height)
        context.drawImage(
          foregroundImg,
          0,
          0,
          foregroundImg.width,
          foregroundImg.height,
          0,
          0,
          bookImg.width,
          bookImg.height
        )

        // const imgData = context.getImageData(0, 0, bookImg.width, bookImg.height)
        // handle img data
      })
    }

    reader.readAsDataURL(selectedFile)
  }
  loadImg = (imgElement, src) => {
    return new Promise(resolve => {
      imgElement.src = src
      imgElement.onload = event => {
        resolve(event)
      }
    })
  }
  render() {
    return (
      <div>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button>upload</button>
        </div>
        <br />
        <canvas id="canvas" width="500" height="500" style={{ border: '#333 solid 1px' }}></canvas>
      </div>
    )
  }
}
