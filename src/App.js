import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Components/Course";
import Angular from "./images/angular.png";
import Bootstrap from "./images/bootstrap.jpg";
import ReactJs from "./images/reactjs.png";
import ReactNative from "./images/reactnative.png";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Courses</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Angular, HTML, CSS ve JavaScript/TypeScript'i bir araya getirerek dinamik ve etkileşimli web uygulamaları oluşturmayı sağlar. İki yönlü veri bağlama özelliği, bileşen tabanlı mimarisi, routing, formlar yönetimi gibi birçok özelliğiyle geliştiricilere kolaylık sağlar. Angular, kapsamlı bir dokümantasyona ve geniş bir geliştirici topluluğuna sahiptir. Bu özellikleriyle, karmaşık ve büyük ölçekli web uygulamaları geliştirmek için tercih edilen bir çatıdır."
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="Bootstrap"
                description="Bootstrap, web geliştiricilerin kullanımına sunulan bir açık kaynaklı CSS ve JavaScript kütüphanesidir. İlk olarak Twitter tarafından geliştirilmiştir ve web uygulamalarını hızlı bir şekilde oluşturmak için tasarlanmıştır. Bootstrap, kullanıcı arayüzü tasarımında yaygın olarak kullanılan bir dizi hazır bileşen ve stiller sunar. Bunlar arasında düğmeler, form alanları, navigasyon menüleri, tipografi ve daha fazlası bulunur. "
              />
            </div>
            <div className="column">
              <Course
                image={ReactJs}
                title="React"
                description="React, sanal DOM (Document Object Model) kullanarak performansı artıran bir yapıya sahiptir. Bu sayede, uygulama içerisindeki değişikliklerin DOM'a yansıtılması daha verimli bir şekilde gerçekleşir. React ayrıca, bileşenler arasında veri akışını yönetmek için tek yönlü veri akışı prensibini kullanır. Bu da uygulamanın daha öngörülebilir ve hata ayıklamasının daha kolay olmasını sağlar."
              />
            </div>
            <div className="column">
              <Course
                image={ReactNative}
                title="React Native"
                description="React Native, Facebook tarafından geliştirilen bir mobil uygulama geliştirme çerçevesidir. JavaScript ve React.js kütüphanesini kullanarak iOS ve Android platformları için native (doğal) mobil uygulamalar oluşturmanıza olanak tanır. React Native, aynı kod tabanını paylaşarak, farklı platformlarda hızlı bir şekilde uygulama geliştirmeyi sağlar. Bu, geliştiricilerin iş akışını hızlandırır ve maliyeti düşürür. React Native, performansı ve kullanıcı deneyimini artırmak için platforma özgü bileşenleri ve API'leri kullanır. "
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
