import React from 'react';

function HeaderComponent(props){
   const {logoTitle, homePath, imgSrc, imgAlt, sub1, sub2, sub3, sub4} = props;

   const [addClass, setAddClass] = React.useState({
      addClass1: false,
      addClass2: false,
      addClass3: false,
      addClass4: false
   });

   const {addClass1,addClass2,addClass3,addClass4} = addClass;

   const onMouseEnter1=()=>{
      setAddClass({
         addClass1: true,
         addClass2: false,
         addClass3: false,
         addClass4: false
      })
   }
   const onMouseEnter2=()=>{
      setAddClass({
         addClass1: false,
         addClass2: true,
         addClass3: false,
         addClass4: false
      })
   }
   const onMouseEnter3=()=>{
      setAddClass({
         addClass1: false,
         addClass2: false,
         addClass3: true,
         addClass4: false
      })
   }
   const onMouseEnter4=()=>{
      setAddClass({
         addClass1: false,
         addClass2: false,
         addClass3: false,
         addClass4: true
      })
   }

   const onMouseLeaveAddCLass=()=>{
      setAddClass({
         addClass1: false,
         addClass2: false,
         addClass3: false,
         addClass4: false
      })
   }


      return(
         <header id="header" onMouseLeave={onMouseLeaveAddCLass}>
            <div className="left">
               <h1><a href={homePath} title={logoTitle}><img src={imgSrc} alt={imgAlt}/></a></h1>
            </div>
            <div className="right">
               <nav id="nav">
                  <ul>
                     <li>
                        <a href="!#" 
                        onMouseEnter={onMouseEnter1} 
                        className={`main-btn ${addClass1 && 'on'}`} 
                        title="재단소개">재단소개
                        </a>
                        <div className={`sub sub1 ${addClass1 && 'on'}`}>
                           <div className="container">
                              <ul>
                                 <li>
                                    <ul>
                                       {
                                          sub1.map((item, idx)=>{
                                             return(
                                                <li key={idx}><a href="!#" title={item.subMenu1}>{item.subMenu1}</a></li>
                                             )
                                          })
                                       }
                                    </ul>
                                 </li>
                                 <li>
                                    <ul>
                                       {
                                          sub1.map((item, idx)=>{
                                             return(
                                                <li key={idx}><a href="!#" title={item.subMenu2}>{item.subMenu2}</a></li>
                                             )
                                          })
                                       }
                                    </ul>                      
                                 </li>
                                 <li>
                                    <ul>
                                       {
                                          sub1.map((item, idx)=>{
                                             return(
                                                <li key={idx}><a href="!#" title={item.subMenu3}>{item.subMenu3}</a></li>
                                             )
                                          })
                                       }
                                    </ul>                      
                                 </li>
                                 <li>
                                    <ul>
                                       {
                                          sub1.map((item, idx)=>{
                                             return(
                                                <li key={idx}><a href="!#" title={item.subMenu4}>{item.subMenu4}</a></li>
                                             )
                                          })
                                       }
                                    </ul>                      
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </li>
                     <li>
                        <a href="!#" 
                        onMouseEnter={onMouseEnter2} 
                        className={`main-btn ${addClass2 && 'on'}`}  
                        title="후원하기">후원하기
                        </a>
                        <div className={`sub sub2 ${addClass2 && 'on'}`}>
                           <div className="container">
                              <ul>
                                 <li>
                                    <ul>
                                       {
                                          sub2.map((item, idx)=>{
                                             return(
                                                <li key={idx}><a href="!#" title={item.subMenu1}>{item.subMenu1}</a></li>
                                             )
                                          })
                                       }
                                    </ul>
                                 </li>
                                 <li>
                                    <ul>
                                       {
                                          sub2.map((item, idx)=>{
                                             return(
                                                <li key={idx}><a href="!#" title={item.subMenu2}>{item.subMenu2}</a></li>
                                             )
                                          })
                                       }
                                    </ul>                      
                                 </li>
                                 <li>
                                    <ul>
                                       {
                                          sub2.map((item, idx)=>{
                                             return(
                                                <li key={idx}><a href="!#" title={item.subMenu3}>{item.subMenu3}</a></li>
                                             )
                                          })
                                       }
                                    </ul>                      
                                 </li>
                                 <li>
                                    <ul>
                                       {
                                          sub2.map((item, idx)=>{
                                             return(
                                                <li key={idx}><a href="!#" title={item.subMenu4}>{item.subMenu4}</a></li>
                                             )
                                          })
                                       }
                                    </ul>                      
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </li>
                     <li>
                        <a href="!#" 
                        onMouseEnter={onMouseEnter3} 
                        className={`main-btn ${addClass3 && 'on'}`}  
                        title="자료실">자료실
                        </a>
                        <div className={`sub sub3 ${addClass3 && 'on'}`}>
                           <div className="container">
                              <ul>
                                 <li>
                                    <ul>
                                       {
                                          sub3.map((item, idx)=>{
                                             return(
                                                <li key={idx}><a href="!#" title={item.subMenu1}>{item.subMenu1}</a></li>
                                             )
                                          })
                                       }
                                    </ul>
                                 </li>
                                 <li>
                                    <ul>
                                       {
                                          sub3.map((item, idx)=>{
                                             return(
                                                <li key={idx}><a href="!#" title={item.subMenu2}>{item.subMenu2}</a></li>
                                             )
                                          })
                                       }
                                    </ul>                      
                                 </li>
                                 <li>
                                    <ul>
                                       {
                                          sub3.map((item, idx)=>{
                                             return(
                                                <li key={idx}><a href="!#" title={item.subMenu3}>{item.subMenu3}</a></li>
                                             )
                                          })
                                       }
                                    </ul>                      
                                 </li>
                                 <li>
                                    <ul>
                                       {
                                          sub3.map((item, idx)=>{
                                             return(
                                                <li key={idx}><a href="!#" title={item.subMenu4}>{item.subMenu4}</a></li>
                                             )
                                          })
                                       }
                                    </ul>                      
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </li>
                     <li>
                        <a href="!#" 
                        onMouseEnter={onMouseEnter4} 
                        className={`main-btn ${addClass4 && 'on'}`} 
                        title="스토리">스토리
                        </a>
                        <div className={`sub sub4 ${addClass4 && 'on'}`}>
                           <div className="container">
                              <ul>
                                 <li>
                                    <ul>
                                       {
                                          sub4.map((item, idx)=>{
                                             return(
                                                <li key={idx}><a href="!#" title={item.subMenu1}>{item.subMenu1}</a></li>
                                             )
                                          })
                                       }
                                    </ul>
                                 </li>
                                 <li>
                                    <ul>
                                       {
                                          sub4.map((item, idx)=>{
                                             return(
                                                <li key={idx}><a href="!#" title={item.subMenu2}>{item.subMenu2}</a></li>
                                             )
                                          })
                                       }
                                    </ul>                      
                                 </li>
                                 <li>
                                    <ul>
                                       {
                                          sub4.map((item, idx)=>{
                                             return(
                                                <li key={idx}><a href="!#" title={item.subMenu3}>{item.subMenu3}</a></li>
                                             )
                                          })
                                       }
                                    </ul>                      
                                 </li>
                                 <li>
                                    <ul>
                                       {
                                          sub4.map((item, idx)=>{
                                             return(
                                                <li key={idx}><a href="!#" title={item.subMenu4}>{item.subMenu4}</a></li>
                                             )
                                          })
                                       }
                                    </ul>                      
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </li>
                  </ul>
               </nav>
            </div>
         </header>
      )
   }
   HeaderComponent.defaultProps = {
      logoTitle: 'HOME',
      homePath: './index.html',
      imgSrc: './images/logo.png',
      imgAlt: 'Green복지재단 Logo',
      sub1: [
         {subMenu1: '설립취지',    subMenu2: '서브메뉴1', subMenu3: '서브메뉴2', subMenu4: '서브메뉴1'},
         {subMenu1: '연혁',       subMenu2: '서브메뉴2', subMenu3: '서브메뉴2', subMenu4: '서브메뉴2'},
         {subMenu1: '찾아오시는길', subMenu2: '서브메뉴3', subMenu3: '서브메뉴3', subMenu4: '서브메뉴3'},
      ],
      sub2: [
         {subMenu1: '서브메뉴1', subMenu2: '국내후원', subMenu3: '서브메뉴1', subMenu4: '서브메뉴1'},
         {subMenu1: '서브메뉴2', subMenu2: '국외후원', subMenu3: '서브메뉴2', subMenu4: '서브메뉴2'},
         {subMenu1: '서브메뉴3', subMenu2: '맞춤후원', subMenu3: '서브메뉴3', subMenu4: '서브메뉴3'},
      ],
      sub3: [
         {subMenu1: '서브메뉴1', subMenu2: '서브메뉴1', subMenu3: '서식자료실', subMenu4: '서브메뉴1'},
         {subMenu1: '서브메뉴2', subMenu2: '서브메뉴2', subMenu3: '사진자료실', subMenu4: '서브메뉴2'},
         {subMenu1: '서브메뉴3', subMenu2: '서브메뉴3', subMenu3: '후원양식',  subMenu4: '서브메뉴3'},
      ],
      sub4: [
         {subMenu1: '서브메뉴1', subMenu2: '서브메뉴1', subMenu3: '서브메뉴1', subMenu4: '웹진'},
         {subMenu1: '서브메뉴2', subMenu2: '서브메뉴2', subMenu3: '서브메뉴2', subMenu4: '보고서'},
         {subMenu1: '서브메뉴3', subMenu2: '서브메뉴3', subMenu3: '서브메뉴3', subMenu4: '나의후원'},
      ]
   }

export default HeaderComponent;