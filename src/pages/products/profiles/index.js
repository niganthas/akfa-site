import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import get from 'lodash/get'

const pathPrefix = process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
const profile7000 = ({ data, location, transition }) => {
  const site = get(data, 'site.siteMetadata')
  const pageTitle = 'Пластиковый профиль 7000'

  return (
    <div className="ProductPage" style={transition && transition.style}>
      <Helmet title={pageTitle + ' - ' + get(site, 'title')} />
      <div className="profilePage">
        <h3>{pageTitle}</h3>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <div className="profileIntroTxt">
                <p>
                  Компания является первым и крупнейшим производителем и
                  экспортером алюминиевого и пластикового профиля на рынке
                  Узбекистана. Широкий ассортимент выпускаемой продукции
                  способен полностью удовлетворить потребительский спрос
                  физических и юридических лиц не только нашего региона, но и
                  близлежащих стран. Мы будем рады сотрудничать и видеть Вас в
                  числе постоянных клиентов компании AKFA!
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="profile-img">
                <img src={pathPrefix + '/img/profile.jpg'} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profilePage">
        <h3>{pageTitle}</h3>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <div className="profileIntroTxt">
                <p>
                  Компания является первым и крупнейшим производителем и
                  экспортером алюминиевого и пластикового профиля на рынке
                  Узбекистана. Широкий ассортимент выпускаемой продукции
                  способен полностью удовлетворить потребительский спрос
                  физических и юридических лиц не только нашего региона, но и
                  близлежащих стран. Мы будем рады сотрудничать и видеть Вас в
                  числе постоянных клиентов компании AKFA!
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="profile-img">
                <img src={pathPrefix + '/img/profile.jpg'} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profilePage">
        <h3>{pageTitle}</h3>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <div className="profileIntroTxt">
                <p>
                  Компания является первым и крупнейшим производителем и
                  экспортером алюминиевого и пластикового профиля на рынке
                  Узбекистана. Широкий ассортимент выпускаемой продукции
                  способен полностью удовлетворить потребительский спрос
                  физических и юридических лиц не только нашего региона, но и
                  близлежащих стран. Мы будем рады сотрудничать и видеть Вас в
                  числе постоянных клиентов компании AKFA!
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="profile-img">
                <img src={pathPrefix + '/img/profile.jpg'} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profilePage">
        <h3>{pageTitle}</h3>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <div className="profileIntroTxt">
                <p>
                  Компания является первым и крупнейшим производителем и
                  экспортером алюминиевого и пластикового профиля на рынке
                  Узбекистана. Широкий ассортимент выпускаемой продукции
                  способен полностью удовлетворить потребительский спрос
                  физических и юридических лиц не только нашего региона, но и
                  близлежащих стран. Мы будем рады сотрудничать и видеть Вас в
                  числе постоянных клиентов компании AKFA!
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="profile-img">
                <img src={pathPrefix + '/img/profile.jpg'} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profilePage">
        <h3>{pageTitle}</h3>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <div className="profileIntroTxt">
                <p>
                  Компания является первым и крупнейшим производителем и
                  экспортером алюминиевого и пластикового профиля на рынке
                  Узбекистана. Широкий ассортимент выпускаемой продукции
                  способен полностью удовлетворить потребительский спрос
                  физических и юридических лиц не только нашего региона, но и
                  близлежащих стран. Мы будем рады сотрудничать и видеть Вас в
                  числе постоянных клиентов компании AKFA!
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="profile-img">
                <img src={pathPrefix + '/img/profile.jpg'} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profilePage">
        <h3>{pageTitle}</h3>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <div className="profileIntroTxt">
                <p>
                  Компания является первым и крупнейшим производителем и
                  экспортером алюминиевого и пластикового профиля на рынке
                  Узбекистана. Широкий ассортимент выпускаемой продукции
                  способен полностью удовлетворить потребительский спрос
                  физических и юридических лиц не только нашего региона, но и
                  близлежащих стран. Мы будем рады сотрудничать и видеть Вас в
                  числе постоянных клиентов компании AKFA!
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="profile-img">
                <img src={pathPrefix + '/img/profile.jpg'} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query profile7000 {
    site {
      siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
      }
    }
  }
`

export default profile7000
