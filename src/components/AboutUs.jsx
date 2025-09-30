import React from 'react'
import  '../components/css/about.css'
const AboutUs = () => {
  return (
    <div class="about-section">
        <div class="inner-width">
          <h1>About Us</h1>
          <div class="border"></div>
          <div class="about-section-row">
            <div class="about-section-col">
              <div class="about">
              
                <p>
                 "Clever Monkey" refers to different entities, primarily a Mauritian brand strategy and design agency known for its creative work in brand identity, website design, and digital marketing. The term also appears in product marketing for clothing brands with "Clever Monkey" printed on items sold on sites like Amazon.ie. Additionally, "Clever Monkey" is used by a children's toy retailer, Indoor Outdoors, and is sometimes used in the name of other businesses or as a title in content marketing. 
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div class="about-section-col">
              <div class="skills">
                <div class="skill">
                  <div class="title">Man</div>
                  <div class="progress">
                    <div class="progress-bar p1"><span>90%</span></div>
                  </div>
                </div>

                <div class="skill">
                  <div class="title">Women</div>
                  <div class="progress">
                    <div class="progress-bar p2"><span>70%</span></div>
                  </div>
                </div>

                <div class="skill">
                  <div class="title">Kids</div>
                  <div class="progress">
                    <div class="progress-bar p3"><span>50%</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AboutUs