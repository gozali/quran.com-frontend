import React from 'react';
import classNames from 'classnames';

class NavCollapseToggle extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      toggled: true
    };
  }

  toggleNavCollapse(e) {
    e.preventDefault();

    this.setState({
        toggled: !this.state.toggled
    });

    // This is bad! @TODO: change this please :)
    $('.right-side').toggleClass('active');
  }

  render() {
    var classes = classNames({
      active: this.state.toggled,
      'nav-link': true,
      'toggle-icon': true
    });

    return(
      <div className="col-md-1 border-right text-center height-100">
      <a className={classes} onClick={this.toggleNavCollapse.bind(this)}>
        <i className="ss-icon ss-layout" />
      </a>
      </div>
    );
  }
}

export default NavCollapseToggle;
