import React from 'react';
import IndexHeader from 'components/header/IndexHeader';

class About extends React.Component {
  render() {
    return(
      <div>
        <IndexHeader />
        <div className="container-fluid about-text">
          <div className="row">
              <div className="col-md-8 col-md-offset-2">
                  <h4 className="source-sans">
                    The Noble Qur'an is the central
                    religious text of Islam. Muslims believe the Qur’an is the
                    book of Divine guidance and direction for mankind, and
                    consider the original Arabic text the final revelation of
                    Allah (God).[1] All translations of the original Arabic text
                    are thus interpretations of the original meanings and should
                    be embraced as such. For more information about the Noble
                    Qur'an, you may visit its Wikipedia article.
                  </h4>
              </div>
          </div>
          <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h3>MECCAN SURAHS</h3>
                <h4 className="source-sans">
                  The Meccan suras are the chronologically earlier chapters
                  (suras) of the Qur'an that were, according to Islamic
                  tradition, revealed anytime before the migration of the
                  Islamic prophet Muhammed and his followers from Mecca to
                  Medina (Hijra). The Medinan suras are those revelations that
                  occurred after the move to the city of that name.
                </h4>
              </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <h3>MEDINAN SURAHS</h3>
              <h4 className="source-sans">
                The Medinan suras or Medinan chapters of the Qur'an are the
                latest 24 suras that, according to Islamic tradition, were
                revealed at Medina after Muhammad's hijra from Mecca. These
                suras were revealed by Allah when the Muslim community was
                larger and more developed, as opposed to their minority position
                in Mecca.
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <h3>BROWSING SURAHS ON THIS WEBSITE</h3>
              <h4 className="source-sans">
                We have redesigned the website with a user friendly approach in
                mind. To browse through the surahs, click on the button
                (shown left) in the READ & LISTEN page and navigate surah by
                title or by page. In future iterations, we will be integrating
                more search and audio features inshaAllah. If you have any
                suggestions on how we can make the website a better experience
                please do not hesitate to <a href="/contactus">contact us</a>.
              </h4>
            </div>
          </div>
          <div className="row credits">
            <div className="col-md-8 col-md-offset-2">
              <h3><strong>CREDITS</strong></h3>
              <h4>
                This website was created by a few volunteers and was made
                possible with the will of Allah (Glory be unto Him) and with the
                help of the open source Muslim community online. Data sources
                include Tanzil, QuranComplex, Zekr and Online Qur'an Project.
                If you have any questions, you may visit the Contact page.
               </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default About;
