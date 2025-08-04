import { SelectPlayer } from "./components/SelectPlayer"

function App() {
  return (
    <main className="max-w-full min-h-screen bg-main-bg flex flex-col items-center justify-center text-white">
      <section className="w-3xl h-fit text-center">
        <SelectPlayer />
      </section>
    </main>
  )
}

export default App
