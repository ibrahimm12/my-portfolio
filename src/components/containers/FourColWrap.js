import React from "react";

class FourColWrap extends React.Component {
  render() {
    return (
      <div className="full-width-row cta-bg">
        <div className="row-container">
          <div>
            <h2 className="h1-header h1-header--blue">{this.props.header}</h2>
            <p className="para para-md-width">{this.props.para}</p>
          </div>

          <div className="four-col-wrap">
            {this.props.skills &&
              this.props.skills.map((skill, i) => {
                return (
                  <div key={i} className="four-col-wrap__item">
                    <div className="four-col-wrap__item__inner">
                      {RegExp(".(gif|jpg|jpeg|tiff|png)$").test(skill.icon) ===
                      true ? (
                        <img
                          className="four-col-wrap__item__inner__jquery-img"
                          src={skill.icon}
                          alt={`${skill.text}`}
                        />
                      ) : (
                        <i
                          className={`four-col-wrap__item__inner__icon ${skill.icon}`}
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
              Frontend Development
            </h3>
            <p class="cta__para para">
              I believe that the main reason is that front-end development
              satisfies my need for creativity. It enabled me to easily put my
              ideas into digital form and get results back really quick. I still
              remember the first time I created an HTML page and opened it in
              the browser. A whole new world of possibilities appeared before my
              eyes.
            </p>
          </div>
          <div className="four-col-wrap">
            <div className="four-col-wrap__item">
              <div className="four-col-wrap__item__inner">
                <i className="four-col-wrap__item__inner__icon fab fa-html5" />
                <h3 className="h3-header text-center">HTML5</h3>
              </div>
            </div>
            <div className="four-col-wrap__item">
              <div className="four-col-wrap__item__inner">
                <i className="four-col-wrap__item__inner__icon fab fa-css3-alt" />
                <h3 className="h3-header text-center">CSS</h3>
              </div>
            </div>
            <div className="four-col-wrap__item">
              <div className="four-col-wrap__item__inner">
                <i className="four-col-wrap__item__inner__icon fab fa-js" />
                <h3 className="h3-header text-center">JavaScript</h3>
              </div>
            </div>
            <div className="four-col-wrap__item">
              <div className="four-col-wrap__item__inner">
                <i className="four-col-wrap__item__inner__icon fab fa-react" />
                <h3 className="h3-header text-center">React</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FourColWrap;
