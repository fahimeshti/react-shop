import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

const styles = {
    marginRight: "10px",
    outline: "none",
    boxShadow: "none !important"
}
const FilterBySize = (props) => {
    return (
        <Form.Select onChange={props.onChange} name="size" size="sm" style={styles}>
            <option>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
        </Form.Select>
    );
};

export default FilterBySize;