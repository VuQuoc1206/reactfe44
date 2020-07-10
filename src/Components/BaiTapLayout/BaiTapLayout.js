import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTSilder from './BTSilder'
import Footer from './Footer'
import BTProduct from './BTProduct'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader/>
                <BTSilder/>
                <BTProduct/>
                <Footer/>
            </div>
        )
    }
}
