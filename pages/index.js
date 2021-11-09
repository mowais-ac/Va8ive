import Head from 'next/head'

import VendorVoucher from '../components/VendorVoucher'
import logoPriceline from '../public/images/logo_priceline.jpg'
import logoWayfair from '../public/images/logo_wayfair.jpg'
import logoOverstock from '../public/images/logo_overstock.jpg'
import logoSoma from '../public/images/logo_soma.jpg'

export default function Home() {
  return (
    <div className={'container'}>
      <Head>
        <title>Featured Coupons & Deals</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={'main'}>
        <h1 className={'main_title'}>Featured Coupons &amp; Deals</h1>
        <div className={'row'}>
          <VendorVoucher img={logoPriceline} title={'15% Off Sitewide + Free Shipping on $75+ Authentic Product'}/>
          <VendorVoucher img={logoWayfair} title={'15% Off Sitewide + Free Shipping on $75+ Authentic Product'}/>
          <VendorVoucher img={logoOverstock} title={'15% Off Sitewide + Free Shipping on $75+ Authentic Product'}/>
          <VendorVoucher img={logoSoma} title={'15% Off Sitewide + Free Shipping on $75+ Authentic Product'}/>
        </div>
      </main>
    </div>
  )
}