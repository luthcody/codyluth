import Header from './header'
// import Footer from './footer'

export default function Page({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}