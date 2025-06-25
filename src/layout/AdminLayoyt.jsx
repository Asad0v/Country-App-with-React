import React from 'react'
import AdminHeader from '../components/AdminHeader'
import { Outlet } from 'react-router-dom'

function AdminLayoyt() {
  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  )
}

export default AdminLayoyt
