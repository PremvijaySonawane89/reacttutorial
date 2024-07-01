import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Contact() {
  return (
    <>
    <Header/>
    <div class="page-heading about-page-heading" id="top">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="inner-content">
                        <h2>Contact Us</h2>
                        <span>Online Popular Shopping APP</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="contact-us">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div id="map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15129.312550153267!2d73.9098687!3d18.5592394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c139e3055555%3A0xd5c2716ff5580211!2sFelix%20IT%20Systems!5e0!3m2!1sen!2sin!4v1698991399958!5m2!1sen!2sin" width="100%" height="400px" frameborder="0" allowfullscreen></iframe>                      
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="section-heading">
                        <h2>Say Hello. Don't Be Shy!</h2>
                        <span>Details to details is what makes Felixshop different from the other themes.</span>
                    </div>
                    <form id="contact" action="" method="post">
                        <div class="row">
                          <div class="col-lg-6">
                            <fieldset>
                              <input name="name" type="text" id="name" placeholder="Your name" required=""/>
                            </fieldset>
                          </div>
                          <div class="col-lg-6">
                            <fieldset>
                              <input name="email" type="text" id="email" placeholder="Your email" required=""/>
                            </fieldset>
                          </div>
                          <div class="col-lg-12">
                            <fieldset>
                              <textarea name="message" rows="6" id="message" placeholder="Your message" required=""></textarea>
                            </fieldset>
                          </div>
                          <div class="col-lg-12">
                            <fieldset>
                              <button type="submit" id="form-submit" class="main-dark-button"><i class="fa fa-paper-plane"></i></button>
                              </fieldset>
                          </div>
                        </div>
                      </form>
                </div>
            </div>
        </div>
    </div>
    <div class="subscribe">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="section-heading">
                        <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
                        <span>Details to details is what makes Felixshop different from the other themes.</span>
                    </div>
                    <form id="subscribe" action="" method="get">
                        <div class="row">
                          <div class="col-lg-5">
                            <fieldset>
                              <input name="name" type="text" id="name" placeholder="Your Name" required=""/>
                            </fieldset>
                          </div>
                          <div class="col-lg-5">
                            <fieldset>
                              <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Address" required=""/>
                            </fieldset>
                          </div>
                          <div class="col-lg-2">
                            <fieldset>
                              <button type="submit" id="form-submit" class="main-dark-button"><i class="fa fa-paper-plane"></i></button>
                            </fieldset>
                          </div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-6">
                            <ul>
                                <li>Store Location:<br/><span>907,Platinum Square, Vascon Weikfield Corporate Park Nagar Road, next to Hyatt Hotel, opp. WNS Global Services, Pune, Maharashtra 411014</span></li>
                                <li>Phone:<br/><span> 085912 49419</span></li>
                                <li>Office Location:<br/><span>Pune, Maharashtra</span></li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul>
                                <li>Work Hours:<br/><span>07:30 AM - 9:30 PM Daily</span></li>
                                <li>Email:<br/><span>felixshopping@frlix.com</span></li>
                                <li>Social Media:<br/> <span><a href="https://facebook.com" target="_blank">facebook</a><br/>
                            <a href="https://instagram.com" target="_blank">Instagram</a><br/>
                            <a href="https://twitter.com" target="_blank">twitter</a><br/>
                            <a href="https://linkedin.com" target="_blank">linkedin</a><br/>
                            </span></li></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
