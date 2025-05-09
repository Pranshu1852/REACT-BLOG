import { MenuItem, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { generalAction, type StateType } from '../store/store';

function Dropdown() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const { language } = useSelector((state: StateType) => {
    return {
      language: state.general.language,
    };
  });

  function handleLanguageChange(lang: string) {
    dispatch(generalAction.setLanguage(lang));
    i18n.changeLanguage(lang);
  }

  return (
    <TextField
      id="outlined-select-currency"
      select
      defaultValue="en"
      className="[&&]:py-1"
      value={language}
      onChange={(event) => {
        handleLanguageChange(event.target.value);
      }}
    >
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="gj">Gujarati</MenuItem>
      <MenuItem value="hi">Hindi</MenuItem>
      <MenuItem value="fr">French</MenuItem>
      <MenuItem value="ar">Arabic</MenuItem>
    </TextField>
    // <select className="py-2 px-4 rounded-md">
    //     <option value="">Language</option>
    //     <option value="en">English</option>
    //     <option value="gj">Gujarati</option>
    //     <option value="hi">Hindi</option>
    //     <option value="fr">French</option>
    //     <option value="ar">Arabic</option>
    // </select>
  );
}

export default Dropdown;
