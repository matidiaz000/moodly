'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Nav from "@/components/Nav";
import Card from '@/app/registros/components/Card';
import Header from '@/components/Header';
import Empty from './components/Empty';
import Fab from './components/Fab';
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie";

export default function ListadoRegistros() {
  const router = useRouter()
  const [active, setActive] = React.useState<number>();
  const [data, setData] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<any>(true);
  const [error, setError] = React.useState<any>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get('token')
        if (!token) router.push('/cuenta/ingreso')
        const res = await fetch(`/api/records?offset=${0}&limit=${0}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();
        if (data.code === 200) setData(data.data);
        else throw `Error in fetch call`
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: 'calc(100% - 56px)'
        }}
      >
        <Header title='Inicio' />
        
        <Empty sx={{ display: data.length === 0 ? 'block' : 'none'}} />
        
        <Box sx={{ display: data.length > 0 ? 'flex' : 'none', flexDirection: 'column', mt: 4, mb: 'auto', width: '100%', pb: '56px' }}>
          {// eslint-disable-next-line @typescript-eslint/no-explicit-any
          data.map((item: any, index: any) => 
            <Card
              key={item.id}
              id={item.id}
              sx={{ mb: 2 }}
              img={item.img}
              date={new Date(item.date)}
              active={active === index}
              mood={item.mood}
              dream={item.sleep}
              activities={item.activities}
              note={item.note}
              handleActive={() => setActive(active === index ? undefined : index)}
            />
          )}
        </Box>
      </Box>

      <Fab arrow={data.length === 0} />

      <Nav />
    </>
  );
}