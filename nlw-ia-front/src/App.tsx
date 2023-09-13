import { Button } from "@/components/ui/button";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Slider } from "./components/ui/slider";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./components/ui/select";
import { Label } from "./components/ui/label";
import { Github, FileVideo, Upload, Wand2 } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* App Header */}
      <div
        id="AppHeader"
        className="px-6 py-3 flex items-center justify-between"
      >
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido no NLW da Rocketseat
          </span>

          <Separator orientation="vertical" className="h-6" />

          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>

      {/* App Content */}
      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div id="TextAreas" className="flex-1 grid grid-rows-2 gap-4">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Inclua o prompt para a IA..."
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Resultado gerado pela IA..."
              readOnly
            />
          </div>

          <p className="text-sm">
            Lembre-se: você pode utilizar a variável{" "}
            <code className="text-violet-600">{"{transcription}"}</code> no seu
            prompt para adicionar o conteúdo da transcrição do vídeo.
          </p>
        </div>

        <aside className="w-80 space-y-4">
          <form className="space-y-6">
            {/* A label quando tem o htmlFor pro input, podemos clicar nela para clicar no input (trigger) */}
            <label
              htmlFor="video"
              className="border-2 flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-violet-200/50"
            >
              <FileVideo className="w-4 h-4" />
              Selecionar Vídeo
            </label>
            <input
              type="file"
              id="video"
              accept="video/mp4"
              className="sr-only"
            />

            <Separator />

            <div className="space-y-1">
              <Label htmlFor="transcriptionPrompt">Prompt de transcrição</Label>
              <Textarea
                id="transcriptionPrompt"
                placeholder="Inclua as palavras chave do vídeo separadas por vírgula ( , )"
                className="h-20 leading-relaxed resize-none"
              />
            </div>

            <Button type="submit" className="w-full">
              Carregar Vídeo
              <Upload className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <Separator />

          <form className="space-y-4">
            <div className="space-y-2">
                <Label>Promp</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder='Selecione um prompt...'/>
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="title">Título do YouTube</SelectItem>
                    <SelectItem value="description">Descrição do YouTube</SelectItem>
                  </SelectContent>
                </Select>
              </div>

            <div className="space-y-2">
              <Label>Modelo</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                Você poderá customizar essa opção em breve...
              </span>
            </div>

            <Separator />


            <div className="space-y-4">
              <Label>Temperatura</Label>
              
              <Slider min={0} max={1} step={0.1} />
              
              <span className="block text-xs text-muted-foreground italic">
                Valores mais altos tendem a deixar o resultado mais criativo, mas com possíveis erros.
              </span>
            </div>

            <Separator />

            <Button type="submit" className="w-full">
              Executar
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
}

export default App;
