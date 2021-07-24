import './Table.css'
import React from "react";

class Table extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            checkedCar: 'Ничего не выбрано'
        }
        this.checkCar = this.checkCar.bind(this)
    }



    // const {cars,tariffs_list:tariffsList} = props;
    // console.log(props.dataCars.cars)
    // console.log(props.dataCars)
    checkCar(e) {
        if(e.target.innerHTML !== '-') {
            this.setState({
                checkedCar: `Выбран автомобиль ${e.target.parentElement.childNodes[0].innerHTML} ${e.target.innerHTML} года`
            })
        }
    }

    render() {
        if (this.props.dataCars.length == 0) return <h1>загрузка</h1>

        else if (this.props.dataCars) return (
            <div className='scroll'>
                <table className='table'>
                    <tr>
                        <th>Марка и модели</th>
                        {this.props.dataCars['tariffs_list'].map((item,idx) => (
                            <th key={item}>{item}</th>
                        ))}
                    </tr>
                    {this.props.dataCars.cars.map((item, idx) => (
                        <tr key={idx} className='trs'>
                            <td align='center'>{`${item.mark} ${item.model}`}</td>
                            <td onClick={this.checkCar} align='center'>{item.tariffs['Стандарт'] ? item.tariffs['Стандарт'].year : '-'}</td>
                            <td onClick={this.checkCar} align='center'>{item.tariffs['Комфорт'] ? item.tariffs['Комфорт'].year : '-'}</td>
                            <td onClick={this.checkCar} align='center'>{item.tariffs['Бизнес'] ? item.tariffs['Бизнес'].year : '-'}</td>
                            <td onClick={this.checkCar} align='center'>{item.tariffs['Комфорт+'] ? item.tariffs['Комфорт+'].year : '-'}</td>
                            <td onClick={this.checkCar} align='center'>{item.tariffs['Эконом'] ? item.tariffs['Эконом'].year : '-'}</td>
                            <td onClick={this.checkCar} align='center'>{item.tariffs['Минивен'] ? item.tariffs['Минивен'].year : '-'}</td>
                            <td onClick={this.checkCar} align='center'>{item.tariffs['Лайт'] ? item.tariffs['Лайт'].year : '-'}</td>
                        </tr>
                    ))}
                </table>
                <div className='checked-car'>
                    {this.state.checkedCar}
                </div>
            </div>
        )
    }




}


export default Table;