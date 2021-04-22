import { Button } from './Button'

interface SidebarProps {
  genres: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }[],
  handleClickButton: Function,
  selected: Function
}

export function SideBar({ genres, handleClickButton, selected }: SidebarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selected(genre.id)}
          />
        ))}
      </div>
    </nav>
  )
}