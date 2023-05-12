import React, { useEffect } from 'react'
import {useSelector, shallowEqual} from 'react-redux'
import Loader from '../../components/loader'
import LeftSidebar from '../../components/left-sidebar-candidate'
import Navbar from '../../components/navbar-candidate'
import '../../css/layouts/layout-1.css'

const Layout = ({children, isSidebar, isNav}) => {
  const {config, palettes} = useSelector(
    (state) => ({
      config: state.config,
      palettes: state.palettes
    }),
    shallowEqual
  )
  const {layout, collapsed} = {...config}
  let {background, navbar, logo, leftSidebar, rightSidebar} = {
    ...palettes
  }

  return (
    <div
      data-layout={layout}
      data-collapsed={collapsed}
      data-background={background}
      data-navbar={navbar}
      data-logo={logo}
      data-left-sidebar={leftSidebar}
      data-right-sidebar={rightSidebar}
      className={`${background === 'dark' ? 'dark-mode' : 'default-mode'}`}>
      <Loader />
      <div className="wrapper">
        {isSidebar &&
          <LeftSidebar />
        }
        <div className="main w-full bg-grey-50 text-grey-900 dark:bg-grey-900 dark:text-white">
          {isNav &&
          <Navbar />
          }
          <div className="min-h-screen w-full p-4">{children}</div>
        </div>
      </div>
    </div>
  )
}
export default Layout
