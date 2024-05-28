import React, { Suspense, lazy } from "react"

const LazyComponent = lazy(() => import("./LazyComponent"))
import LoadingComponent from "./LoadingComponent"
import BasicForm from "./ControlledForm"

const App: React.FC = () => (
	<div>
		<Suspense fallback={<LoadingComponent/>}>
      <LazyComponent />
      <BasicForm/>
		</Suspense>
	</div>
)

export default App