import { useDispatch } from 'react-redux';
import style from './Service.module.css';
import { Link } from 'react-router-dom'
import { selectService } from '../../redux/actions/actions';

const Service = ({ id, serviceName, vehicleType, cost, discountDay }) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(selectService({
            id: id,
            serviceName: serviceName,
            vehicleType: {value: vehicleType, label: vehicleType},
            cost: cost,
            discountDay: discountDay
        }));
    }
    return (
        <div className={style.serviceContainer}>

            <div className={style.leftContainer}>
                <span>{serviceName}</span>
            </div>

            <div className={style.rightContainer}>
                <div className={style.valuesContainer}>
                    <span>Valor: {cost}</span>
                    <span>Descuento del día: {discountDay}</span>
                </div>
                <Link to='/su/services/editServices'>
                    <div className={style.imgContainer} onClick={handleClick}>
                        <img
                            className={style.editImg}
                            src="https://www.svgrepo.com/show/73131/edit-button.svg"
                            alt=""
                        />
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default Service;