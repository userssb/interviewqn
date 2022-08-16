import './index.css'
import sqlite from 'sqlite'
import sqlite3 from 'sqlite3'
import app from 'express'

const SSB = () => {
  const saveData = () => {}

  return (
    <div className="bg-cont">
      <div className="form-cont">
        <div className="line-cont">
          <label htmlFor="txtName">Name :</label>
          <input type="text" placeholder="Enter Name :" />
        </div>
        <div className="line-cont">
          <label htmlFor="txtMobile">Mobile :</label>
          <input type="text" placeholder="Enter Mobile No. :" />
        </div>
        <div className="btn-cont">
          <button type="button" className="btn-save" onClick={saveData()}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
export default SSB
