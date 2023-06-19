import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
import User from './User'
import { useSelector } from "react-redux"

import './Users.css'
import Loader from '../../Components/Loader/Loader'
const Users = () => {
  const users = useSelector(state => state.usersReducer)
  return (
    <div className='home-container-1'>
      <LeftSideBar />
      <div className="home-container-2" style={{ marginTop: '30px' }}>
        <h1 style={{ fontWeight: "400" }}>Users</h1>
        {
          users.length === 0 ? (
            <Loader />
          ) : (
            <div className='user-list-container'>
              {users.map(user => (
                <User user={user} key={user?._id} />
              ))}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Users