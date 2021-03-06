import Document, {Html, Head, Main, NextScript} from 'next/document'

class Mydocument extends Document{
    render(){
        return (
            <Html lang="en">
                <Head>
                  
                    <meta name="description" content="width=device-width, initial-scale=1.0"/>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="/css/style.css"/>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/keen-slider@latest/keen-slider.min.css" />
                    {/* <link rel="stylesheet" href="/keen-slider.min.css"/> */}
                    <link rel="stylesheet" href="/css/slider.css"/>
                    <link rel="stylesheet" href="/css/footer.css"/>
                    <link rel="stylesheet" href="/css/product.css"/>
                    <link rel="stylesheet" href="/css/cart.css"/>
                    {/* <link rel="stylesheet" href="/bootstrap.min.css"/> */}
                    <link rel="stylesheet" href="/reponsive/max991.css"/>
                    <link rel="stylesheet" href="/reponsive/max1440.css"/>
                    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
                    <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous"></script>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default Mydocument