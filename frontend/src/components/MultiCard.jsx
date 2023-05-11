import React from 'react'
import CardBar from '../components/CardBar'

function MultiCard() {
  return (
    <div className="card-container">
      <div className="item1">
        <CardBar image='https://i.insider.com/60c9ff5a23393a00188e36f8?width=1136&format=jpeg' name='MEN' />
      </div>
      <div className="item2">
        <CardBar image='https://petapixel.com/assets/uploads/2022/03/Facebook-Ray-Ban-Stories-Sunglasses-Update-Doubles-Recording-Limits-800x420.jpg' name='WOMEN' />
      </div>
      <div className="item3">
        <CardBar image='https://media.ray-ban.com/cms/resource/image/527350/landscape_ratio15x11/858/630/52e4bdb2eb86641d8a60fce27555b8b2/7D2A9513A20286A6E4C8058015B28C5A/hp-bucagender-kids-d.jpg' name='KIDS' />
      </div>
    </div>
  )
}

export default MultiCard;