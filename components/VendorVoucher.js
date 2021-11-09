import Image from 'next/image'
import logoPriceline from '../public/images/logo_priceline.jpg'

function VendorVoucher(props) {
    const { img, title } = props
    return (
        <div className="col-lg-3 col-md-4 col-xs-12">
            <div className={'vendor_box'}>
                <div className="logo"><Image src={img} alt="Priceline" /></div>
                <div className="tag_sale">SALE</div>
                <h3>{title}</h3>
                <div className="vc_btn_wrap">
                    <button className={'btn btn_voucher fluid'}>VOUCHEQEQ2</button>
                    <div className="get_code_wrap">Get Code</div>
                </div>
                <div className="uses_count">321 uses today</div>
            </div>
        </div>
    )
}

export default VendorVoucher