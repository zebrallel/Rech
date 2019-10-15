import * as React from 'react'
import foreground from '../../assets/cover.png'
import { expandWithLimitation } from './process'

export default class CanvasImg extends React.Component {
  onFileChange = event => {
    const selectedFile = event.target.files[0]
    const reader = new FileReader()

    reader.onload = eve => {
      const bookImg = new Image()
      const foregroundImg = new Image()

      Promise.all([this.loadImg(foregroundImg, foreground), this.loadImg(bookImg, eve.target.result)]).then(() => {
        const canvas = document.createElement('canvas')
        document.documentElement.appendChild(canvas)
        canvas.width = bookImg.width
        canvas.height = bookImg.height
        const context = canvas.getContext('2d')

        context.drawImage(bookImg, 0, 0, bookImg.width, bookImg.height, 0, 0, bookImg.width, bookImg.height)

        expandWithLimitation(
          context,
          {
            x1: 185,
            x2: 195,
            y1: 134,
            y2: 144 
          },
          foregroundImg,
          bookImg
        )

        // const imgData = context.getImageData(0, 0, bookImg.width, bookImg.height)
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
      </div>
    )
  }
}
