import "./App.css";
import { Button } from "@material-ui/core";
import logo from "./umut.JPG";
import facebook from "./icons/facebook.png";
import whatsapp from "./icons/whatsapp.png";
import phone from "./icons/phone.png";
import gardrops from "./icons/gardrops.png";
import instagram from "./icons/instagram.png";
import linkedin from "./icons/linkedin.png";
import skype from "./icons/skype.png";
import snapchat from "./icons/snapchat.png";
import twitter from "./icons/twitter.png";
import youtube from "./icons/youtube.png";
import stack from "./icons/stack2.png";
import mail from "./icons/mail.png";
import discord from "./icons/discord.png";
import spotify from "./icons/spotify.png";
import steam from "./icons/steam.png";
import tiktok from "./icons/tiktok.png";
import telegram from "./icons/telegram.png";
import letgo from "./icons/letgo.png";
import github from "./icons/github.png";
import udemy from "./icons/udemy.png";
import gigbenders from "./icons/gigbenders.png";
import medium from "./icons/medium.png";
import u from "./icons/u.png";
//sağ üst bentıklayınca gitme ve tr eng
/*
          <a
          className="App-link"
          href="   https://join.skype.com/invite/dHq6N1MI20Rl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="asd" src={skype} alt="Logo" />
        </a>
     
        <a
          className="App-link"
          href="https://t.me/umutocgdr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="asd" src={telegram} alt="Logo" />
        </a>
        */
/*
          <a
            className="App-link"
            href="https://stackoverflow.com/users/10380395/umut-ÖÇgÜder?tab=profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="asd" src={stack} alt="Logo" />
          </a>
          
          
        
        
        <a
        className="App-link"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="asd" src={udemy} alt="Logo" />
      </a>
             <a
        className="App-link"
        href="    https://medium.com/@umutocgdr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="asd" src={medium} alt="Logo" />
      </a>
  
      */
/*
          <a
            className="App-link"
            href="https://www.facebook.com/umutocgdr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="asd" src={facebook} alt="Logo" />
          </a>
          <a
            className="App-link"
            href="https://twitter.com/umutocgdr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="asd" src={twitter} alt="Logo" />
          </a>
          <a
            className="App-link"
            href="  https://vm.tiktok.com/ZSJJhJA6V/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="asd" src={tiktok} alt="Logo" />
          </a>
          */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar"></div>

        <h1 className="name">HI I'M UMUT ÖÇGÜDER</h1>
        <img className="imagem" src={logo} alt="Logo" />
        <h3 className="aralik">Engineer/Developer</h3>
        <h5>
          I am 22 years old, energetic, newly graduated software engineer. I
          have sociability, adaptability and fast learning skills. I aim for a
          long and successful career.
        </h5>
        <div className="buttons">
          <div className="buttons">
            <Button
              variant="contained"
              className="App-link"
              href="https://drive.google.com/file/d/1nXtWwdK2_MlxP1dODHfoN5fV0-GMVI1O/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV Tr
            </Button>
          </div>
          <div className="buttons">
            <Button
              variant="contained"
              className="App-link"
              href="https://drive.google.com/file/d/1aJUgLU66GT-TXrV_LiBPasYIp7qeLwKL/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV Eng
            </Button>
          </div>
        </div>
        <p>Contact me!</p>
        <div className="socials">
          <a
            className="App-link"
            href="tel:05074902605"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="asd" src={phone} alt="Logo" />
          </a>
          <a
            className="App-link"
            href="https://wa.me/905074902605"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="asd" src={whatsapp} alt="Logo" />
          </a>
          <a
            className="App-link"
            href="mailto:umutocgdr@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="asd" src={mail} alt="Logo" />
          </a>
        </div>
        <p>Bussines & Teach</p>
        <div className="socials">
          <a
            className="App-link"
            href="https://linkedin.com/in/umutocgdr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="asd" src={linkedin} alt="Logo" />
          </a>
          <a
            className="App-link"
            href="https://github.com/umutocgdr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="asd" src={github} alt="Logo" />
          </a>
          <a
            className="App-link"
            href="https://www.youtube.com/channel/UCFUh7uiiBXFtCbMwYjFNXbg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="asd" src={youtube} alt="Logo" />
          </a>
        </div>
        <p>Social Media</p>
        <div className="socials">
          <a
            className="App-link"
            href="  https://www.instagram.com/umutocgdr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="asd" src={instagram} alt="Logo" />
          </a>

          <a
            className="App-link"
            href="   https://www.snapchat.com/add/umutocgdr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="asd" src={snapchat} alt="Logo" />
          </a>
        </div>

        <p>Other</p>
        <div className="socials">
          <a
            className="App-link"
            href="  https://open.spotify.com/user/umutocgdr?si=rbekIIBHTIGBB1OCVHr-Ng&_branch_match_id=851775412390281676"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="asd" src={spotify} alt="Logo" />
          </a>

          <a
            className="App-link"
            href="https://discord.gg/jWyDuta8zP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="asd" src={discord} alt="Logo" />
          </a>
          <a
            className="App-link"
            href=" https://steamcommunity.com/id/umutocgdr "
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="asd" src={steam} alt="Logo" />
          </a>
          <a
            className="App-link"
            href="    https://www.letgo.com/tr-tr/u/umut-oecgueder_5c70538e-8335-4e02-a9b9-3e933eb62663"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="asd" src={letgo} alt="Logo" />
          </a>
          <a
            className="App-link"
            href="   https://www.gardrops.com/umutocgdr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="asd" src={gardrops} alt="Logo" />
          </a>
        </div>

        <div>{/**
          <div className="cv">
            <h1>My online CV</h1>

            <h4>Personal Information</h4>
            <h6>
              Birth Date<br></br>
              14.04.1999
            </h6>
            <h6>
              Gender<br></br>
              Male
            </h6>
            <h6>
              Driving Licence<br></br>A1 - B
            </h6>

            <h6>
              Smoke, Alcohol<br></br>I don't use
            </h6>

            <h4>Skills</h4>
            <h5>Software Skills</h5>
            <h6>
              C/C++ <br></br>
              Java<br></br>
              Java Script <br></br>
              Assembly<br></br>
              Sql<br></br>
              Phython<br></br>
            </h6>

            <h6>
              React Native <br></br>
              Java Applet <br></br>
              Database<br></br>
              Ccs C<br></br>
              Mikro C <br></br>
              Proteus <br></br>
              MacOS <br></br>
              Windows <br></br>
              Linux<br></br>
            </h6>
            <h6>
              <b>Other Skills</b>
              <br></br>
              Communication<br></br>
              Fast learner<br></br>
              Teamwork<br></br>
              Leadership<br></br>
            </h6>
            <h5>Languages</h5>
            <h6>
              English<br></br>
              Professional working proficiency<br></br>
              <br></br>
              Turkish<br></br>
              Native or bilingual proficiency
            </h6>

            <h5>Test Scores</h5>

            <h6>
              Ales 67,6<br></br>Feb 2021 <br></br>
              <br></br>
              Yökdil 66,25<br></br>Feb 2021
            </h6>
          </div>

          <div>
            <h4>Experience</h4>
            <h5>Gonye Tourism</h5>
            <h6>
              Interpreter<br></br>
              Apr 2018 – Feb 2020<br></br>I worked as an interpreter for hunters
              who come to our country. I usually worked three weeks in a year.
              <br></br>
            </h6>

            <a href="http://www.gonyetur.com.tr/" target="_blank">
              http://www.gonyetur.com.tr/
            </a>

            <h5>Neva Mühendislik (Neva Engineering)</h5>
            <h6>
              Cross Platform Software Developer (Intern) Full-time<br></br>
              Jul 2019 – Aug 2019<br></br>I started learning React Native and
              took over the task of transferring a website to the cross platform
              using React Native. I started learning Python and OpenCV.
            </h6>

            <a href="http://nevamuhendislik.com/" target="_blank">
              http://nevamuhendislik.com/
            </a>

            <h5>ENDÜSTRİYEL ELEKTRİK ELEKTRONİK SAN. ve TİC. LTD. ŞTİ.</h5>
            <h6>
              Arduino Software Developer (Intern) Full-time<br></br>
              Jun 2019 – Jul 2019<br></br>I started learning Arduino and played
              a role in the card reading system project.
            </h6>

            <a href="https://www.endustriyel.com/" target="_blank">
              https://www.endustriyel.com/
            </a>

            <h5>Logithink Software</h5>
            <h6>
              Pic Software Developer (Intern) Full-time<br></br>
              Jul 2018 – Aug 2018<br></br>I started to learn Pic programming.I
              took an active role in transferring the image taken from the
              internet(sim card) to the microcontroller's lcd screen. I used C
              and Proteus.
            </h6>
            <a></a>

            <a href="https://logithink.com.tr/" target="_blank">
              https://logithink.com.tr/
            </a>
          </div>
          <div>
            Education Konya Technical University Konya Technical University
            Degree NameBachelor's degreeField Of StudyComputer Science Dates
            attended or expected graduation2019 – 2021 Faculty of Engineering
            and Natural Sciences The name of my university changed in 2019 Gpa:
            2.95 Selçuk Üniversitesi Selçuk Üniversitesi Degree NameBachelor's
            degreeField Of StudyComputer Science Dates attended or expected
            graduation2017 – 2019 Faculty of Engineering Sınav Academy High
            School Sınav Academy High School Dates attended or expected
            graduation2016 – 2017 Activities and Societies: Basketball Player
            (Club-School)
            http://www.konyayenigun.com/spor/sinav-farkli-galip-h128915.html
            Gpa: 84,29 Karatay Science High School Karatay Science High School
            Dates attended or expected graduation2015 – 2016 Activities and
            Societies: Basketball Player (Club-School) Hekimoglu Anatolian
            School Hekimoglu Anatolian School Dates attended or expected
            graduation2014 – 2015 Activities and Societies: Basketball player
            (Club-School)
          </div>
          <div>
            Projects Gigbenders Oct 2020 – Present We established a company that
            performs software solutions with my 3 friends. Hama Oct 2020 – July
            2021 Social media app (Web(desktop-mobile)-Ios-Android)
          </div>

          <div>
           */}
            <h4>Hama</h4>
            <p>
              Oct 2020 – July 2021
              <br />
              Social media app (Web(desktop-mobile)-Ios-Android)
            </p>
            <div className="socials">
              <a
                className="App-link"
                href="mailto:hamaturist@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="asd" src={mail} alt="Logo" />
              </a>
              <a
                className="App-link"
                href="  https://www.instagram.com/hamaturist/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="asd" src={instagram} alt="Logo" />
              </a>
              <a
                className="App-link"
                href=" https://www.facebook.com/HamaTurist"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="asd" src={facebook} alt="Logo" />
              </a>
              <a
                className="App-link"
                href="    https://twitter.com/hamaturist"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="asd" src={twitter} alt="Logo" />
              </a>

              <a
                className="App-link"
                href="   https://youtube.com/channel/UCvX_9vI7o2GYpXksYYK1s3Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="asd" src={youtube} alt="Logo" />
              </a>
            </div>
            <br /> <br /> <br /> <br /> <h4> Gigbenders</h4>{" "}
            <p>
              Oct 2020 – Present
              <br />
              We established a company that performs software solutions with my
              3 friends.
            </p>
            <div className="socials">
              <a
                className="App-link"
                href="     https://www.gigbenders.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="asd" src={gigbenders} alt="Logo" />
              </a>
              <a
                className="App-link"
                href=" mailto:  info@gigbenders.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="asd" src={mail} alt="Logo" />
              </a>
              <a
                className="App-link"
                href="        https://www.instagram.com/gigbenders/?hl=tr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="asd" src={instagram} alt="Logo" />
              </a>
              <a
                className="App-link"
                href=" https://www.facebook.com/Gigbenders-112846433960472"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="asd" src={facebook} alt="Logo" />
              </a>
              <a
                className="App-link"
                href="  https://twitter.com/gigbenders"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="asd" src={twitter} alt="Logo" />
              </a>
            </div>
          </div>

          <div className="courses">
            {" "}
            Courses
            <p>
              Algorithms-Artificial Neural Network-Automata Theory-Basic
              Electronics-Calculus I-II-Computer Networks-Data structure-
              Database-Differential Equations-Discrete Mathematics-Evolutionary
              Computation-Expert Systems-File Structures-Fuzzy Logic-
              Information Security-Linear Algebra Logic Design-Medical
              Informatics-Microarchitecture-Microcontrollers-Microprocessors-
              Object Oriented Programming-Occupational Safety and Health
              I-II-Operating Systems-Physics I-II-Programming I-II- Signals and
              Systems-Software Engineering-Statistics-Visual Programming
              Language
            </p>
        </div>
      </header>
    </div>
  );
}

export default App;
