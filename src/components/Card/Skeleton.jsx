import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={260}
    height={360}
    viewBox="0 0 260 360"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="260" height="265" />
    <rect x="52" y="296" rx="10" ry="10" width="174" height="17" />
    <rect x="96" y="330" rx="10" ry="10" width="81" height="17" />
  </ContentLoader>
)

export default MyLoader
