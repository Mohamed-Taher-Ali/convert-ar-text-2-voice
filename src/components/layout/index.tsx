import { Link, Outlet, useLocation } from 'react-router-dom'
import { Layout, Menu, theme } from 'antd'

import { routes } from 'src/router/routes'

const { Header, Content, Footer } = Layout

export const AppLayout = () => {
  const location = useLocation()

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout style={{ width: '100%', height: '100%' }}>
      <Header className="top-0 z-10 w-full sticky flex items-center">
        <div className="text-white text-base font-extrabold pr-4">
          {`Arabic Text { 2 } Voice`}
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          className="flex-1 min-w-0"
          selectedKeys={[location.pathname]}
          items={routes.map(({ path, title }) => ({
            label: <Link to={path}>{title}</Link>,
            key: path,
          }))}
        />
      </Header>
      <Content className="pt-12 pb-0 px-4 sm:px-[12vw] md:px-[16vw] lg:px-[20vw] xl:px-[24vw]">
        <div
          className="p-6 min-h-[380px]"
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer className="text-center">
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  )
}
