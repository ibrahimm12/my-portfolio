import React from "react";
import mongoDBlogo from "../../images/mongoDB-logo.png";
import mysqlicon from "../../images/mysql-icon.png";
import springbooticon from "../../images/spring-boot-icon.png";
import vaadinicon from "../../images/vaadin_icon.png";
import yiiframework from "../../images/yiiframework.png";

class ThreeColWrap extends React.Component {
  render() {
    return (
      <div className="full-width-row">
        <div className="row-container">
          <div>
            <h2 className="h1-header h1-header--blue">{this.props.header}</h2>
            <p className="para para-md-width">{this.props.para}</p>
          </div>

          <div className="three-col-wrap">
            {this.props.skills &&
              this.props.skills.map((skill, i) => {
                return (
                  <div key={i} className="three-col-wrap__item">
                    <div className="three-col-wrap__item__inner">
                      {RegExp(".(gif|jpg|jpeg|tiff|png)$").test(skill.icon) ===
                      true ? (
                        <img
                          className="three-col-wrap__item__inner__img"
                          src={skill.icon}
                          alt={`${skill.text}`}
                        />
                      ) : (
                        <i
                          className={`three-col-wrap__item__inner__icon ${skill.icon}`}
                        />
                      )}
                      <h3 className="h3-header text-center">{skill.text}</h3>
                    </div>
                  </div>
                );
              })}
          </div>

          <div class="row-container text-center">
            <h3 class="cta__header h1-header h1-header--blue">
              Backend Development
            </h3>
            <p class="cta__para para">
              I enjoy being challenged and engaging with projects that require
              me to work outside my comfort and knowledge set, as continuing to
              learn new languages and development techniques are important to
              me.
            </p>
          </div>
          {
            <div className="three-col-wrap">
              <div className="three-col-wrap__item">
                <div className="three-col-wrap__item__inner">
                  <img
                    className="three-col-wrap__item__inner__img"
                    src={mysqlicon}
                    alt=""
                  />
                  <h3 className="h3-header text-center">MySQL</h3>
                </div>
              </div>
              <div className="three-col-wrap__item">
                <div className="three-col-wrap__item__inner">
                  <img
                    className="three-col-wrap__item__inner__img"
                    src={springbooticon}
                    alt=""
                  />
                  <h3 className="h3-header text-center">Springboot</h3>
                </div>
              </div>

              <div className="three-col-wrap__item">
                <div className="three-col-wrap__item__inner">
                  <img
                    className="three-col-wrap__item__inner__img"
                    src={vaadinicon}
                    alt=""
                  />
                  <h3 className="h3-header text-center">Vaadin Platform </h3>
                </div>
              </div>
              <div className="three-col-wrap__item">
                <div className="three-col-wrap__item__inner">
                  <img
                    className="three-col-wrap__item__inner__img"
                    src={yiiframework}
                    alt=""
                  />
                  <h3 className="h3-header text-center">PHP Yii-Framewrok</h3>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default ThreeColWrap;
