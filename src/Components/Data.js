import React, {Component} from 'react'

class Data extends Component {
    state = {
        dataList: this.props.dataList,
        show: true
    }
    toggleData = () => {
        const {show} = this.state;
        this.setState({
            show: !show
        })
    }
    render() {
        const {dataList} = this.state
        return (
            <div className="form__container">
                <h1>Data: {dataList[0].label}</h1>
                <button className="form__button" onClick={() => (this.toggleData())}>Toggle Data</button>
                {this.state.show && dataList[0]
                    .row
                    .map((item, index) => {
                        return (
                            <div className="form__item" key={item.level}>
                                <ul className="form__item--green">
                                    <li>level: {item.level}</li>
                                    <li>
                                        Locations: {item
                                            .locations
                                            .map((item, index) => {
                                                return (
                                                    <span key={item.name}>
                                                        <ul className="form__item--dark-blue">
                                                            <li>Name: {item.name}</li>
                                                            <li>Stock:
                                                                <ul className="form__item--blue">{item
                                                                        .stock
                                                                        .map((item, index) => {
                                                                            return (
                                                                                <span key={item.product}>
                                                                                    <li>product: {item.product}</li>
                                                                                    <li>quantity: {item.qty}</li>
                                                                                    <li>replenishment: {item.replenishment}</li>
                                                                                </span>
                                                                            )
                                                                        })}</ul>
                                                            </li>
                                                        </ul>
                                                    </span>
                                                )
                                            })}</li>
                                </ul>
                            </div>
                        )
                    })}
            </div>
        )
    }
}

export default Data;