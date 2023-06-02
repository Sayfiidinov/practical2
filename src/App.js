import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div>
      {/*bu yerdan header boshlangan */}
        <header>
          <div className="container"> 
        <h1><a href="#"><span>Ali Sayfiddinov</span></a></h1>
          <div className='myMenu'>
          <ul>
          <li ><a href="">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
         </ul>
          </div>
        
          </div>
        </header>
       {/* Bu yerda haeder tugagan */} 

       { /* bu yerdan HomeSection boshlangan */}
        <section id="homeSection">
          <div className='grid'>
                     

          <div className='picture n1'>
            <img src="https://static.wixstatic.com/media/d78df6_4517dc1e0b1545bf84dccd915203c870.jpg/v1/fill/w_378,h_378,al_c,q_80,usm_0.66_1.00_0.01/d78df6_4517dc1e0b1545bf84dccd915203c870.jpg" alt="" />

          </div>
          <div className='picture n2'>
            <img src="https://static.wixstatic.com/media/d78df6_9f4f79dd27814710b261e3acb931156e.jpg/v1/fill/w_378,h_566,al_c,q_80,usm_0.66_1.00_0.01/d78df6_9f4f79dd27814710b261e3acb931156e.jpg" alt="" />

          </div>
          <div className='picture n3'>
            <img src="https://static.wixstatic.com/media/d78df6_914d12d64a57420c99737b9933ebe7fc.jpg/v1/fill/w_378,h_378,al_c,q_80,usm_0.66_1.00_0.01/d78df6_914d12d64a57420c99737b9933ebe7fc.jpg" alt="" />
          </div>
          <div className='picture n4'>
            <img src="https://static.wixstatic.com/media/d78df6_3eea4c192eed4667a602ead5652459c5.jpg/v1/fill/w_378,h_378,al_c,q_80,usm_0.66_1.00_0.01/d78df6_3eea4c192eed4667a602ead5652459c5.jpg" alt="" />
          </div>
          <div className='picture n5'>
           <img src="https://static.wixstatic.com/media/d78df6_b572be78b8984e2db58978eb21e433d7.jpg/v1/fill/w_378,h_378,al_c,q_80,usm_0.66_1.00_0.01/d78df6_b572be78b8984e2db58978eb21e433d7.jpg" alt="" />
          </div>
          <div className='picture n6'>
           <img src="https://static.wixstatic.com/media/d78df6_afe9335eb67640c988d648f7671308e5.jpg/v1/fill/w_378,h_378,al_c,q_80,usm_0.66_1.00_0.01/d78df6_afe9335eb67640c988d648f7671308e5.jpg" alt="" />
          </div>
          <div className='picture n7'>
          <img src="https://static.wixstatic.com/media/d78df6_b9747effc3074458a295cf5674f8c73c.jpg/v1/fill/w_378,h_378,al_c,q_80,usm_0.66_1.00_0.01/d78df6_b9747effc3074458a295cf5674f8c73c.jpg" alt="" />
          </div>
          <div className='picture n8'>
           <img src="https://static.wixstatic.com/media/d78df6_394a136048754355ad8432b30522c761.jpg/v1/fill/w_378,h_378,al_c,q_80,usm_0.66_1.00_0.01/d78df6_394a136048754355ad8432b30522c761.jpg" alt="" />
          </div>
          <div className='picture n9'>
           <img src="https://static.wixstatic.com/media/d78df6_24dc2b5011604bc7ada79cbd953a7c5a.jpg/v1/fill/w_378,h_378,al_c,q_80,usm_0.66_1.00_0.01/d78df6_24dc2b5011604bc7ada79cbd953a7c5a.jpg" alt="" />
          </div>
          </div>
          </section>
      { /*Bu yerdan Homesection tugagan */}
      <footer>
        <div className='copyName'>
          <p>&copy;2023 Sayfiddinov Ali Uzbekistan </p>
          
                    
        </div>
      </footer>

     </div>
  );
}

export default App;
