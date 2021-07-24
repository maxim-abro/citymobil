import './Content.css'
import axios from 'axios'
import React, {useState,useEffect,} from 'react'
import Table from '../Table/Table'
import img from "../Search/search.svg";
import '../Search/Search.css'
import _ from 'lodash'

function Content() {
    const [carData, setCarData] = useState([])
    const [value, setValue] = useState('')
    const [filtered, setFiltered] = useState([])
    const [carHeaders, setCarHeaders] = useState([])

    const getCars = () =>{
        axios.get('https://city-mobil.ru/api/cars')
            .then((response) => {
                setCarData(response.data.cars)
                setCarHeaders(response.data['tariffs_list'])
            })
    }
    useEffect(()=> {
        getCars()
        console.log(carData.cars)
    }, [])

    const [checkedCar, setCheckedCar] = useState('Ничего не выбрано')

    const checkCar = (e) => {
        if(e.target.innerHTML !== '-') {
            setCheckedCar(`Выбран автомобиль ${e.target.parentElement.childNodes[0].innerHTML} ${e.target.innerHTML} года`)
        }
    }

    const sortMassive = (val)=> {
        const copyCar = carData.concat()
       const sortCars = copyCar.sort((a,b) => {
           return !a.tariffs[val] ? 1 : !b.tariffs[val] ? -1 : a.tariffs[val].year - b.tariffs[val].year
       })
        console.log(sortCars)
        setCarData(sortCars)
    }

    const updateData = () => {
        this.fetchData.getResource()
            .then(data => {
                this.setState({dataCars: data})
                console.log(this.state.dataCars.cars)
            })
    }

    if (carData.length == 0) return <div>Список пуст</div>

    else {return (
            <div className='cont'>
                <div className="search">
                    <input onChange = {event=> {
                        setValue(event.target.value)
                    }} type="search" placeholder='Поиск'/>
                    <img src={img} alt="search"/>
                </div>
                <div className='scroll'>
                    <table className='table'>
                    <tr>
                    <th>Марка и модели</th>
                    {carHeaders.map((item, idx) => (
                        <th onClick={() => {
                            sortMassive(item)
                        }} key={item}>{item}</th>
                    ))}
                    </tr>
                    {carData.filter((val)=> {
                        if(value == '') {
                            return val
                        } else if (val.mark.toLowerCase().includes(value.toLowerCase())) {
                            return val
                        }
                    })
                        .map((item, idx) => (
                        <tr key={idx} className='trs'>
                            <td align='center'>{`${item.mark} ${item.model}`}</td>
                            <td onClick={checkCar}
                                align='center'>{item.tariffs['Стандарт'] ? item.tariffs['Стандарт'].year : '-'}</td>
                            <td onClick={checkCar}
                                align='center'>{item.tariffs['Комфорт'] ? item.tariffs['Комфорт'].year : '-'}</td>
                            <td onClick={checkCar}
                                align='center'>{item.tariffs['Бизнес'] ? item.tariffs['Бизнес'].year : '-'}</td>
                            <td onClick={checkCar}
                                align='center'>{item.tariffs['Комфорт+'] ? item.tariffs['Комфорт+'].year : '-'}</td>
                            <td onClick={checkCar}
                                align='center'>{item.tariffs['Эконом'] ? item.tariffs['Эконом'].year : '-'}</td>
                            <td onClick={checkCar}
                                align='center'>{item.tariffs['Минивен'] ? item.tariffs['Минивен'].year : '-'}</td>
                            <td onClick={checkCar}
                                align='center'>{item.tariffs['Лайт'] ? item.tariffs['Лайт'].year : '-'}</td>
                        </tr>
                    ))}
                    </table>
                    <div className='checked-car'>
                        {checkedCar}
                    </div>
                    </div>}
            </div>
    )
    }

}

export default Content;