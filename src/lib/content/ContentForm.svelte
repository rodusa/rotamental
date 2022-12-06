<script lang="ts">
	import * as utils from '../../common/utils';
	import { slide} from "svelte/transition";
	import { objectives } from '../../stores/objectiveStore';
	import { addDiscipline, disciplineItem } from '../../stores/disciplineStore';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	
	import MyModal from '$lib/modal/modal.svelte';
	// import Chip from '$lib/chips/Chip.svelte';
	// import ChipItem from '$lib/chips/ChipItem.svelte';
	import { createEventDispatcher } from 'svelte';
	import Dp from '$lib/selectbox/Select.svelte';

	export let showForm = true;
	export let jsonTree = {};

	let m;
	//export let objectives;

	//let ar_objectives = [new Promise(()=>[])] ;	
	let showModal = false;
	let todo = '';
	let defaultVal = "1 Direito constitucional. 1.1 Natureza, conceito e objeto. 1.2 Perspectiva sociológica. 1.3 Perspectiva política. 1.4 Perspectiva jurídica. 1.5 Fontes formais. 1.6 Concepção positiva. 2 Constituição. 2.1 Sentidos sociológico, político e jurídico; conceito, objetos e elementos. 2.2 Classificações das constituições. 2.2.1 Constituição material e constituição formal. 2.2.2 Constituição-garantia e constituição-dirigente. 2.3 Normas constitucionais. 3 Poder constituinte: fundamentos do poder constituinte; poder constituinte originário e derivado; reforma e revisão constitucionais; limitação do poder de revisão; emendas à Constituição. 4 Controle de constitucionalidade. 4.1 Conceito e sistemas de controle de constitucionalidade. 4.2 Inconstitucionalidade: por ação e por omissão. 4.3 Sistema brasileiro de controle de constitucionalidade. 5 Fundamentos constitucionais dos direitos e deveres fundamentais. 5.1 Direitos e deveres individuais e coletivos. 5.2 Direito à vida, à liberdade, à igualdade, à segurança e à propriedade. 5.3 Direitos sociais, nacionalidade, cidadania e direitos políticos. 5.4 Partidos políticos. 5.5 Garantias constitucionais individuais. 5.6 Garantias dos direitos coletivos, sociais e políticos. 5.7 Remédios do direito constitucional. 6 Poder Legislativo: fundamento, atribuições e garantias de independência. 7 Processo legislativo: fundamento e garantias de independência, conceito, objetos, atos e procedimentos. 8 Poder Executivo. 8.1 Forma e sistema de governo. 8.2 Chefia de Estado e chefia de governo. 8.3 Atribuições e responsabilidades do presidente da República. 9 Poder Judiciário. 9.1 Disposições gerais. 9.2 Supremo Tribunal Federal. 9.3 Superior Tribunal de Justiça 9.4 Tribunais regionais federais e juízes federais. 9.5 Tribunais e juízes dos estados. 9.6 Funções essenciais à justiça. 10 Defesa do Estado e das instituições democráticas. 10.1 Segurança pública. 10.2 Organização da segurança pública. 11 Atribuições constitucionais da Polícia Federal. 12 Ordem social. 12.1 Base e objetivos da ordem social. 12.2 Seguridade social. 12.3 Educação, cultura e desporto. 12.4 Ciência e tecnologia. 12.5 Comunicação social. 12.6 Meio ambiente. 12.7 Família, criança, adolescente e idoso. 12.8 Índios.";	
	//let objective_id = "";
	
	// function handleSelect(event) {
   	//  console.log('selected item', event.detail);
    // 	// .. do something here 🙂
  	// }
	//loadObjectives();	
	//loadDisciplines();


    function handleSelect(e) {
		alert(e);
        console.log(e.detail);
    }

	onMount(async () => {	
		// Edit item
	
	
	});
		
	// });	

	//let today = $today_date;
	////const today = new Date().toISOString();

	function openModal() {
		showModal = true;
	}

	let url = $page.url;	

	let name = 'baz';
	let result = null;

	function closeForm() {
		showForm=false;
	}

	const handleSubmit = () => {
		//addObjective(todo);
		todo = '';
		console.log('submitting');
	};

	async function saveContent() {	
	let ar_level1 = [];
	let ar_level2 = [];
	let ar_level3 = [];
	let ar_data = [];

	// Level 1
	const regexLevel1 = /(^|[^\.])(\d{1,2})\s+(.*?)\./gm;
	while ((m = regexLevel1.exec(defaultVal)) !== null) {
		// This is necessary to avoid infinite loops with zero-width matches
		if (m.index === regexLevel1.lastIndex) {
			regexLevel1.lastIndex++;
		}
		
		//The result can be accessed through the `m`-variable.
		// m.forEach((match, groupIndex) => {
		// 	console.log(`Found match, group ${groupIndex}: ${match}`);
		// });
		let level = m[2];
		let text = m[3];
		ar_level1.push({level, text});
		console.log(level + ' - ' + text);

	}	

	// Level 2
	const regexLevel2 = /(^|[^\.])(\d{1,2}\.\d{1,2})\s+(.*?)\./gm;
	while ((m = regexLevel2.exec(defaultVal)) !== null) {
		// This is necessary to avoid infinite loops with zero-width matches
		if (m.index === regexLevel2.lastIndex) {
			regexLevel2.lastIndex++;
		}
		
		//The result can be accessed through the `m`-variable.
		// m.forEach((match, groupIndex) => {
		// 	console.log(`Found match, group ${groupIndex}: ${match}`);
		// });

		let level = m[2];
		let text = m[3];
		ar_level2.push({level, text});
		console.log(level + ' - ' + text);

	}	

	// Level 3
	const regexLevel3 = /(^|[^\.])(\d{1,2}\.\d{1,2}\.\d{1,2})\s+(.*?)\./gm;
	while ((m = regexLevel3.exec(defaultVal)) !== null) {
		// This is necessary to avoid infinite loops with zero-width matches
		if (m.index === regexLevel3.lastIndex) {
			regexLevel3.lastIndex++;
		}
		
		//The result can be accessed through the `m`-variable.
		// m.forEach((match, groupIndex) => {
		// 	console.log(`Found match, group ${groupIndex}: ${match}`);
		// });

		let level = m[2];
		let text = m[3];
		ar_level2.push({level, text});
		console.log(level + ' - ' + text);
	}	

	for (let i = 0; i < ar_level1.length; i++) { 	 
	  let ar_children = [];
	  let level1 = ar_level1[i]['level'];
	  let text1 = ar_level1[i]['text'];
	  for (let j = 0; j < ar_level2.length; j++) {
			
			let level2 = ar_level2[j]['level'];
			let text2 = ar_level2[j]['text'];

			let firstNumber = level2.split(".");
			let n = firstNumber[0];
			if (level1 == n) {
				ar_children.push({data: text2})
			}
	  }	 
	  console.log('ar_data');
	  ar_data.push({data: text1, children: ar_children });
	}

	console.log(ar_data);

	jsonTree = {
		data: 'Root',
		expanded: false,
		children: ar_data
	}

	//console.log(jsonTree);

	//console.log(defaultVal);	
	}

</script>

<form class="my-6" on:submit|preventDefault={handleSubmit} transition:slide>
	<div class="flex flex-col text-sm mb-2 max-w-full">
		<label class="font-bold text-sm mb-" for="todo">Colar</label>

		<textarea
		rows="3"
		bind:value={defaultVal}
		placeholder="textarea"
		style="--height: auto"
		class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-blue-500 rounded-lg"
	></textarea>

	</div>

	<!-- <button type="submit" class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 ">Submit</button> -->
	
	<div class="flex flex-row justify-between mx-5 my-5">
	<button
		type="submit"
		class="w-28 shadow-sm rounded bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 "
		on:click={closeForm}>Cancelar</button
	>
	<button
		type="submit"
		class="w-28 shadow-sm rounded bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 "
		on:click={saveContent}>Salvar</button
	>
	</div>

	<!-- <button type="button" on:click={openModal} class="btn">Open Modal</button> -->
</form>
{#if showModal}
	<MyModal
		on:click={() => {
			showModal = false;
		}}
	>
		<p>teste</p>
	</MyModal>
{/if}

<style>
	span {color: red;}
	textarea {
		height: var(--height);
		resize: horizontal;
		padding: 1rem;
		line-height: 1.5;
    overflow: hidden;
	}
</style>