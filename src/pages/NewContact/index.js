import PageHeader from '../../components/PageHeader';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

export default function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />
      <Input placeholder="Nome" />
      <Select>
        <option value="Instagram">Instagram</option>
      </Select>
      <Button type="button">Cadastrar</Button>
      <Button type="button" disabled>Cadastrar</Button>
    </>
  );
}
