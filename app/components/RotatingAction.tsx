import '../styles/rotating_action.css'

export default function RotatingAction() {
  return (
    <p className="intro-action-container">
      A Front-End Developer who
      <br />
      <span className="intro-action-c">C</span>
      <span className="rotating-action-expand">reate </span>
      <span className="intro-action-o">O</span>
      <span className="rotating-action-expand delay-1">ptimize </span>
      <span className="intro-action-d">D</span>
      <span className="rotating-action-expand delay-2">ebug </span>
      <span className="intro-action-e">E</span>
      <span className="rotating-action-expand delay-3">xplore </span>
      <span className="intro-action-remaining"> stuff</span>
    </p>
  )
}
