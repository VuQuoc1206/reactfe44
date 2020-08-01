import React, { Component } from 'react'

export default class KetQua extends Component {
    render() {
        return (
            <div className="container display-4 text-center pt-5">
                <div>Bạn Chọn: <span className="text-danger">TÀI</span></div>
                <div>Số Bàn Thắng: <span className="text-success">0</span></div>
                <div>Tổng Số Bàn Thắng: <span className="text-warning">0</span></div>
            </div>
        )
    }
}
