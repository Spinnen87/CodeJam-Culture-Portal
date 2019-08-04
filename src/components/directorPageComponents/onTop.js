import React, { Component } from 'react';

export default class OnTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowing: false
        }
    }

    componentDidMount() {
        const scrollWidth = document.documentElement.scrollWidth;
        window.addEventListener('scroll', () => {
            if (pageYOffset > scrollWidth / 2 && !this.state.showOnTopButton) this.showOnTopButton();
            else if (this.state.isShowing && pageYOffset < scrollWidth / 2) this.hideOnTopButton();
        });
    }

    showOnTopButton() {
        this.setState({ isShowing: true });
    }

    hideOnTopButton() {
        this.setState({ isShowing: false });
    }

    render() {
        return this.state.isShowing && <a className={'onTop-button'} href={'#title'}><i className="fas fa-arrow-up"></i></a>
    }
}