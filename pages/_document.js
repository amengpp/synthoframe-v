import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends React.Component {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          {/* 预加载关键资源 */}
          <link
            rel="preload"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            as="style"
            crossOrigin="anonymous"
          />
          
          {/* DNS预解析 */}
          <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          
          {/* 字体优化 */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          
          {/* 额外的SEO标签 */}
          <meta name="theme-color" content="#165DFF" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
          <meta name="format-detection" content="telephone=no" />
          
          {/* 性能优化标签 */}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="referrer" content="origin-when-cross-origin" />
          
          {/* 添加hreflang标签（如果网站支持多语言） */}
          <link rel="alternate" hrefLang="en" href="https://synthoframe.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument