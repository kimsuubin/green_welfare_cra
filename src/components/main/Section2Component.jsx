import React from 'react';

function Section2Component({notice, gallery, modalOpen}){

   const onClickModal=(e)=>{
      e.preventDefault();
      modalOpen();
   }

   return(
      <section id="section2">
         <div className="left board">
            <button className="notice-btn" style={{borderRadius:'0'}}>공지사항</button>
            <div className="notice-box board-box">
               <div className="gap">
                  <ul>
                     {
                        notice.map((item, idx)=>{
                           return(
                              <li key={idx}><a href="!#" onClick={idx === 0 && onClickModal} title={item.타이틀} className={idx === 0 && 'modal-btn'}>{item.공지글}</a><span>{item.날짜}</span></li>
                           )
                        })
                     }
                  </ul>
               </div>
            </div>
         </div>
         <div className="center board">
            <button className="gallery-btn" style={{borderRadius:'0'}}>갤러리</button>
            <div className="gallery-box board-box">
               {
                  gallery.map((item, idx)=>{
                     return(
                        <a href="!#" key={idx} title={item.타이틀}><img src={item.이미지} alt={item.타이틀}/></a>
                     )
                  })
               }
            </div>
         </div>  
         <div className="right">
            <div className="banner">
               <div className="title">
                  <h2>EVENT BANNER</h2>
               </div>
               <div className="img-box">
                  <a href="!#" title="banner"><img src="./images/banner.jpg" alt="banner"/></a>
               </div>
            </div>
         </div>  
      </section>
   )
}
Section2Component.defaultProps = {
   notice: [
      {타이틀: 'Green 복지재단 공지사항1', 공지글: 'Green 복지재단 공지사항1', 날짜: '2020.11.23'},
      {타이틀: 'Green 복지재단 공지사항2', 공지글: 'Green 복지재단 공지사항2', 날짜: '2020.11.23'},
      {타이틀: 'Green 복지재단 공지사항3', 공지글: 'Green 복지재단 공지사항3', 날짜: '2020.11.23'},
      {타이틀: 'Green 복지재단 공지사항4', 공지글: 'Green 복지재단 공지사항4', 날짜: '2020.11.23'},
   ],
   gallery: [
      {타이틀: 'icon1', 이미지: './images/icon1.png'},
      {타이틀: 'icon2', 이미지: './images/icon2.png'},
      {타이틀: 'icon3', 이미지: './images/icon3.png'},
   ]
}

export default Section2Component;