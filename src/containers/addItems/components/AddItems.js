import React, { useState, useRef, useEffect } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import Select from "../../../components/Select/Select";
import { sizes, productDep } from "../../../constants/appConstants";
import M from 'materialize-css';
import WithErrorHandler from "../../../hoc/WithErrorHandler";
import Loader from "../../../components/Loader/Loader";
import network from '../../../utils/network';

const initialState = {
    productId:'',
    productName:'',
    brandName:'',
    cost_price:'',
    sell_price:'',
    noOfItems:'',
    availableSizes:[],
    prodDepartment:[],
    prodDesc:'',
    files:[]
}
const AddItems = ({alertMessages}) => {
  
  const setFormData = () => {
    const formData = new FormData();
    formData.append('productId', productId)
    formData.append('productName', productName)
    formData.append('brandName', brandName)
    formData.append('cost_price', cost_price)
    formData.append('sell_price', sell_price)
    formData.append('noOfItems', noOfItems)
    formData.append('availableSizes', availableSizes)
    formData.append('prodDepartment', prodDepartment);
    formData.append('prodDesc', prodDesc);
    for(let i of files) {
      formData.append('images', i);
    }
    return formData;
  }
  
  const depRef = useRef();
  const sizesRef = useRef();
  const uploadFileRef = useRef()
  const [formState, setFormState] = useState(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    M.FormSelect.init(document.getElementById(sizesRef.current.id))
    M.FormSelect.init(document.getElementById(depRef.current.id))
  }, []);

  const fileSelectHandler = (e) => {
    const files =[...e.target.files];
    setFormState({
      ...formState,
      files
    })
  }

  const onInputChangeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]:e.target.value
    })
  }

  const onSelectChange = (e) => {
    let val = M.FormSelect.getInstance(sizesRef.current).getSelectedValues();
    if(e.target.name === 'prodDepartment') {
      val = M.FormSelect.getInstance(depRef.current).getSelectedValues()
    }
    setFormState({
      ...formState,
      [e.target.name]: val
    })
  }

  const createProduct = async() => {
    const formData = setFormData();
    try {
      await network.postData('uploadProduct', formData).next().value;
      setFormState(initialState);
      depRef.current.value = "";
      sizesRef.current.value = "";
      M.FormSelect.getInstance(depRef.current).input.value = "";
      M.FormSelect.getInstance(sizesRef.current).input.value = "";
      uploadFileRef.current.value = "";
      setLoading(false);
      alertMessages.success("Product added successfully.");
    } catch(e) {
      console.log(e);
      setLoading(false);
      alertMessages.error("Some error occured. Please contact system administrator.");
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    M.FormSelect.init(document.getElementById(sizesRef.current.id))
    if(!productId || !productName || !brandName || !cost_price || !sell_price || !noOfItems || !prodDesc || files.length === 0  || formState.prodDepartment.length === 0) {
      alertMessages.error("One or more fields are missing. Please make sure no field is empty");
      return;
    }
    setLoading(true);
    createProduct();
  }

  const {prodDepartment, availableSizes, productId, productName, brandName, cost_price, sell_price, noOfItems,prodDesc, files} = formState;
  return (
    <div>
      {loading && <Loader />}
      <main>
        <div className="section"></div>

        <div className="z-depth-1 grey lighten-4 row formElemDefaualt">
          <h5 className="indigo-text">Add new product here</h5>
          <form className="col s12" method="post"  onSubmit={submitHandler}>
            <div className="row">
              <div className="col s12"></div>
            </div>

            <div className="row">
              <div className="input-field col m3 s12">
                <Input
                  value={productId}
                  onChange={onInputChangeHandler}
                  name="productId"
                  id="productId"
                  label="Product Id"
                ></Input>
              </div>
              <div className="input-field col m3 s12">
                <Input
                  value={productName}
                  onChange={onInputChangeHandler}
                  name="productName"
                  id="productName"
                  label="Product Name"
                ></Input>
              </div>
              <div className="input-field col m2 s12">
                <Input
                  value={brandName}
                  onChange={onInputChangeHandler}
                  name="brandName"
                  id="brandName"
                  label="Brand Name"
                ></Input>
              </div>
              <div className="input-field col m2 s12">
                <Input
                  value={cost_price}
                  onChange={onInputChangeHandler}
                  name="cost_price"
                  id="const_price"
                  label="Cost Price"
                ></Input>
              </div>
              <div className="input-field col m2 s12">
                <Input
                  value={sell_price}
                  onChange={onInputChangeHandler}
                  name="sell_price"
                  id="sell_price"
                  label="Selling Price"
                ></Input>
              </div>
              <div className="input-field col m2 s12">
                <Input
                  value={noOfItems}
                  onChange={onInputChangeHandler}
                  name="noOfItems"
                  id="noOfItems"
                  label="Available"
                ></Input>
              </div>
              <div className="input-field col m4 s12">
                <Select
                  id="sizesSelDropdown"
                  onChange={onSelectChange}
                  ref={sizesRef}
                  selectOptions={sizes}
                  name="availableSizes"
                  multiple
                  label="Sizes available"
                />
              </div>
              <div className="input-field col m4 s12">
                <Select
                  ref={depRef}
                  onChange={onSelectChange}
                  name="prodDepartment"
                  id="depSelDropdown"
                  selectOptions={productDep}
                  multiple
                  label="Product Department"
                />
              </div>
              <div className="input-field col m4 s12">
                <textarea
                  id="textarea1"
                  className="materialize-textarea"
                  value={prodDesc}
                  name="prodDesc"
                  onChange={onInputChangeHandler}
                ></textarea>
                <label htmlFor="textarea1">Product Description(; seperated)</label>
              </div>
              <div className="input-field col m6 s12">
                <div className="file-field input-field">
                  <div className="btn">
                    <span>Upload Images(4)</span>
                    <input onChange={fileSelectHandler} name="images" type="file" multiple />
                  </div>
                  <div className="file-path-wrapper">
                    <input className="file-path validate" ref={uploadFileRef}  type="text" />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <center>
              <div className="row">
                <Button type="submit" name="btn_register">
                  Add New Product
                </Button>
              </div>
            </center>
          </form>
        </div>

        <div className="section"></div>
        <div className="section"></div>
      </main>
    </div>
  );
};

export default WithErrorHandler(AddItems);
