import ActividadCine from '@/components/Icons/actividad/cine';
import ActividadComidas from '@/components/Icons/actividad/comidas';
import ActividadEjercicio from '@/components/Icons/actividad/ejercicio';
import ActividadEstudio from '@/components/Icons/actividad/estudio';
import ActividadJuegos from '@/components/Icons/actividad/juegos';
import ActividadLectura from '@/components/Icons/actividad/lectura';
import ActividadRestaurante from '@/components/Icons/actividad/restaurante';
import ActividadTrabajo from '@/components/Icons/actividad/trabajo';
import ActividadTv from '@/components/Icons/actividad/tv';

import AnimoBien from '@/components/Icons/animo/bien';
import AnimoHorrible from '@/components/Icons/animo/horrible';
import AnimoIncreible from '@/components/Icons/animo/increible';
import AnimoMal from '@/components/Icons/animo/mal';
import AnimoNeutral from '@/components/Icons/animo/neutral';

import DormirBien from '@/components/Icons/dormir/bien';
import DormirMal from '@/components/Icons/dormir/mal';
import DormirRegular from '@/components/Icons/dormir/regular';

type IconsActividad = 'cine' | 'comidas' | 'ejercicio' | 'estudio' | 'juegos' | 'lectura' | 'restaurante' | 'trabajo' | 'tv';
type IconsAnimo = 'bien' | 'horrible' | 'increible' | 'mal' | 'neutral';
type IconsDormir = 'bien' | 'mal' | 'regular';

export type TIcon = IconsActividad | IconsAnimo | IconsDormir;
export type TFolder = 'animo' | 'actividad' | 'dormir';

interface IProps {
  color: string,
  selected: boolean,
  folder: TFolder,
  icon: TIcon,
}

export default function Icons({ color, selected, folder, icon }: IProps): React.ReactNode | undefined {
  if (folder === 'animo') {
    if (icon === 'bien') return <AnimoBien color={color} selected={selected} />
    else if (icon === 'horrible') return <AnimoHorrible color={color} selected={selected} />
    else if (icon === 'increible') return <AnimoIncreible color={color} selected={selected} />
    else if (icon === 'mal') return <AnimoMal color={color} selected={selected} />
    else if (icon === 'neutral') return <AnimoNeutral color={color} selected={selected} />
    else return undefined
  } else if (folder === 'dormir') {
    if (icon === 'bien') return <DormirBien color={color} selected={selected} />
    else if (icon === 'mal') return <DormirMal color={color} selected={selected} />
    else if (icon === 'regular') return <DormirRegular color={color} selected={selected} />
    else return undefined
  } else if (folder === 'actividad') {
    if (icon === 'cine') return <ActividadCine color={color} selected={selected} />
    else if (icon === 'comidas') return <ActividadComidas color={color} selected={selected} />
    else if (icon === 'ejercicio') return <ActividadEjercicio color={color} selected={selected} />
    else if (icon === 'estudio') return <ActividadEstudio color={color} selected={selected} />
    else if (icon === 'juegos') return <ActividadJuegos color={color} selected={selected} />
    else if (icon === 'lectura') return <ActividadLectura color={color} selected={selected} />
    else if (icon === 'restaurante') return <ActividadRestaurante color={color} selected={selected} />
    else if (icon === 'trabajo') return <ActividadTrabajo color={color} selected={selected} />
    else if (icon === 'tv') return <ActividadTv color={color} selected={selected} />
    else return undefined
  } else {
    return undefined
  }
}