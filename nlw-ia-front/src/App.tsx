import { Button } from '@/components/ui/button';
import { Separator } from './components/ui/separator';
import { Github } from 'lucide-react';

function App() {
  return (
    <div>
      <div id='AppHeader' className='px-6 py-3 flex items-center justify-between'>
        <h1 className='text-xl font-bold'>upload.ai</h1>

        <div className='flex items-center gap-3'>
          <span className='text-sm text-muted-foreground'>Desenvolvido no NLW da Rocketseat</span>
          
          <Separator orientation='vertical' className='h-6' />
          
          <Button variant="outline">
            <Github className='w-4 h-4 mr-2' />
            Github
          </Button>
        </div>
      </div>

      
    </div>
  )
}

export default App
